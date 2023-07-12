import { Recipe } from 'widgets/recipe';
import { SearchBar } from 'features/search-bar';
import { useFetchRecipe, useRecipeStore } from 'entities/recipe';
import { useEffect } from 'react';

import styles from './Home.module.scss';

export const Home = () => {
  const isLoading = useRecipeStore((store) => store.isLoading);
  const data = useRecipeStore((store) => store.data);
  const selectedRecipe = useRecipeStore((store) => store.selectedRecipe);
  const setSelectedRecipe = useRecipeStore((store) => store.setSelectedRecipe);

  const fetchRecipes = useFetchRecipe();

  const initHomePage = async () => {
    const result = await fetchRecipes();
    setSelectedRecipe(result[0]);
  }

  useEffect(() => {
    initHomePage();
  }, []);

  return (
    <div className={styles['home']}>
      {data && <SearchBar list={data} />}
      <Recipe isLoading={isLoading} recipe={selectedRecipe} />
    </div>
  );
};