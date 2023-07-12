import { RECIPES_IMAGES } from 'entities/recipe/constants';

export const adapterRecipeFromDTO = (recipe, index) => {
  const origin = recipe.origin.toUpperCase() || '';

  const image = RECIPES_IMAGES?.[origin] || '';

  return ({
    id: index,
    image,
    authenticity: recipe.authenticity || '',
    cookingOil: recipe.cookingOil || '',
    description: recipe.description || '',
    difficulty: recipe.difficulty || '',
    name: recipe.name || '',
    origin,
    produce: recipe.produce || '',
    protein: recipe.protein || '',
    serves: recipe.serves || 0,
    spice: recipe.spice || '',
    stock: recipe.stock || '',
    volume: `${recipe.volume}g` || '',
  })
}

export const adapterRecipesFromDTO = (recipes) => recipes.map((recipe, index) => adapterRecipeFromDTO(recipe, index))
