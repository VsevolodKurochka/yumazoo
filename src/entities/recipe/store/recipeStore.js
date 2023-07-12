import { createStore } from 'shared/store';
import { getRecipeById, getRecipes } from 'shared/api';
import { adapterRecipesFromDTO } from 'entities/recipe/adapters';
import { wait } from 'shared/utils';
import { getFilteredRecipes } from 'entities/recipe/utils/getFilteredRecipes';
import { adapterRecipeFromDTO } from 'entities/recipe/adapters/adapterRecipeFromDTO';
import { toastError } from 'shared/libs/toast';

const initialState = {
  data: null,
  selectedRecipe: null,
  isLoading: false,
};

export const useRecipeStore = createStore('Recipe', (set) => ({
  ...initialState,
  reset: () => {
    set(initialState);
  },
  setData: (value) => set((state) => {
    state.data = value;
  }),
  setSelectedRecipe: (value) => set((state) => {
    state.selectedRecipe = value;
  }),
  setIsLoading: (value) => set((state) => {
    state.isLoading = value;
  }),
}));

export const useFetchRecipe = () => {
  const setIsLoading = useRecipeStore((store) => store.setIsLoading);
  const setData = useRecipeStore((store) => store.setData);
  const setSelectedRecipe = useRecipeStore((store) => store.setSelectedRecipe);

  return async () => {
    try {
      setIsLoading(true);
      const [response, _] = await wait(getRecipes(), 500);
      const recipes = adapterRecipesFromDTO(response);

      const filteredRecipes = getFilteredRecipes(recipes);

      setData(filteredRecipes);

      return filteredRecipes;
    } catch (e) {
      console.log(e);
      toastError('Something went wrong...');
    } finally {
      setIsLoading(false);
    }
  };
};

export const useFetchRecipeById = () => {
  const setIsLoading = useRecipeStore((store) => store.setIsLoading);
  const setSelectedRecipe = useRecipeStore((store) => store.setSelectedRecipe);

  return async (id) => {
    try {
      setIsLoading(true);
      const [response, _] = await wait(getRecipeById(id), 500);
      const recipe = adapterRecipeFromDTO(response, id);
      setSelectedRecipe(recipe);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
};