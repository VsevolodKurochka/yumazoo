import { CONFIG } from 'shared/config';
import { getApi } from '../api';
import axios from 'axios';

const url = `${CONFIG.API_URL}/yumazoo/recipes`;

export const getRecipes = async () => {
  const res = await getApi(url);

  return res.message;
};

export const getRecipeById = async (id) => {
  const res = await getApi(`${url}/${id}`);

  return res.message;
}

export const getRecipesLength = async () => {
  const res = await getApi(`${url}/number`);

  return res.message;
}

export const saveRecipe = async (data) => {
  const res = await axios.post(url, data);

  return res;
}