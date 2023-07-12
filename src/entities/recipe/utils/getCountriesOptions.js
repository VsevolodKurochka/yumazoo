import { RECIPES_COUNTRIES, RECIPES_COUNTRIES_LABELS, RECIPES_IMAGES } from 'entities/recipe/constants';

export const getCountriesOptions = () => Object.keys(RECIPES_COUNTRIES).map((key) => {
  return {
    id: key,
    label: RECIPES_COUNTRIES_LABELS[key],
    image: RECIPES_IMAGES[key],
  };
})