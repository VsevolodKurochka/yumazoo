import { AddRecipeForm } from 'features/add-recipe-form';

import { Header } from 'widgets/header';

export const AddRecipe = () => {
  return (
    <>
      <Header title="Add new recipe" />
      <AddRecipeForm />
    </>
  );
};
