import { AUTHENTICITY } from '../constants';

export const getFilteredRecipes = (recipes) => recipes.filter((recipe) => {
  const isVerified = recipe.authenticity === AUTHENTICITY.VERIFIED;
  const hasDifficulty = Boolean(recipe.difficulty);
  const isCorrectName = !recipe.name.includes('test')

  return isVerified && hasDifficulty && isCorrectName;
});
