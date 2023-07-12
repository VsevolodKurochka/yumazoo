import { createStore } from 'shared/store';
import { AUTHENTICITY } from 'entities/recipe/constants';
import { getCountriesOptions } from 'entities/recipe/utils/getCountriesOptions';
import { initFormValidation, VALIDATORS } from 'shared/utils/formValidation';
import { getRecipesLength, saveRecipe } from 'shared/api';
import { adapterRecipeToDTO } from 'entities/recipe/adapters/adapterRecipeToDTO';
import { toastError, toastSuccess } from 'shared/libs/toast';
import { wait } from 'shared/utils';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from 'entities/recipe/store/recipeStore';

const initialState = {
  fields: {
    name: {
      value: '',
      validators: [VALIDATORS.REQUIRED]
    },
    origin: {
      value: '',
      options: getCountriesOptions(),
    },
    description: {
      value: ''
    },
    difficulty: {
      value: 'easy',
      options: [
        {
          id: 'easy',
          label: 'Easy'
        },
        {
          id: 'medium',
          label: 'Medium'
        },
        {
          id: 'hard',
          label: 'Hard'
        }
      ],
    },
    protein: {
      value: ''
    },
    produce: {
      value: ''
    },
    spice: {
      value: ''
    },
    cookingOil: {
      value: ''
    },
    volume: {
      value: ''
    },
    serves: {
      value: ''
    },
    authenticity: {
      value: '',
      options: [
        {
          id: AUTHENTICITY.VERIFIED,
          label: AUTHENTICITY.VERIFIED
        },
        {
          id: AUTHENTICITY.UNVERIFIED,
          label: AUTHENTICITY.UNVERIFIED
        },
      ],
    },
    stock: {
      value: ''
    },
  },
  isLoading: false,
  errors: null,
};

export const useAddRecipeStore = createStore('AddRecipe', (set) => ({
  ...initialState,
  reset: () => {
    set(initialState);
  },
  setValue: (key, value) => set((state) => {
    state.fields[key].value = value;
    state.errors = null;
  }),
  setIsLoading: (value) => set((state) => {
    state.isLoading = value;
  }),
  setErrors: (value) => set((state) => {
    state.errors = value;
  }),
}));

export const useSaveRecipeForm = () => {
  const navigate = useNavigate();

  const setIsLoading = useAddRecipeStore((store) => store.setIsLoading);
  const setErrors = useAddRecipeStore((store) => store.setErrors);
  const reset = useAddRecipeStore((store) => store.reset);

  const setSelectedRecipe = useRecipeStore((store) => store.setSelectedRecipe);

  const initValidationProcess = (fields) => {
    const validations = initFormValidation(fields);
    const fieldsWithValidations = validations.filter((item) => item.errors);

    const result = fieldsWithValidations.filter((errors) => errors.result);

    return result;
  };

  const initProcessRedirectToSingleRecipe = async () => {
    setSelectedRecipe(null);
    const lastId = await getRecipesLength();
    const index = lastId - 1;

    navigate(`/recipe/${index}`);
  }

  return async (fields) => {
    try {
      setIsLoading(true);
      const resultValidation = initValidationProcess(fields);

      if (resultValidation.length) {
        return setErrors(resultValidation);
      }

      const preparedData = adapterRecipeToDTO(fields);
      await wait(saveRecipe(preparedData), 500);
      reset();
      toastSuccess('Your recipe was saved!');

      await initProcessRedirectToSingleRecipe();
    } catch (e) {
      console.log(e);
      toastError('Something went wrong...');
    } finally {
      setIsLoading(false);
    }
  };
}
