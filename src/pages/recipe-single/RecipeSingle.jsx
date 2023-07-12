import { Recipe } from 'widgets/recipe';
import { SearchBar } from 'features/search-bar';
import { useFetchRecipeById, useRecipeStore } from 'entities/recipe';
import { useEffect } from 'react';

import styles from './RecipeSingle.module.scss';
import { useParams } from 'react-router-dom';
import { Header } from 'widgets/header';

export const RecipeSingle = () => {
  const params = useParams();

  const isLoading = useRecipeStore((store) => store.isLoading);
  const list = useRecipeStore((store) => store.data);
  const selectedRecipe = useRecipeStore((store) => store.selectedRecipe);
  const fetchRecipeById = useFetchRecipeById();

  useEffect(() => {
    fetchRecipeById(params.id);
  }, [params]);

  return (
    <div className={styles['recipe']}>
      <Header title={`Recipe ${params.id}`} />
      {list && <SearchBar list={list} onSelect={fetchRecipeById} />}
      <Recipe isLoading={isLoading} recipe={selectedRecipe} />
    </div>
  );
};