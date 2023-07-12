import { DIFFICULTY_SAVE_MAP } from 'entities/recipe/constants';

export const adapterRecipeToDTO = (fields) => ({
  name: fields.name.value,
  origin: fields.origin.value,
  description: fields.description.value,
  difficulty: DIFFICULTY_SAVE_MAP[fields.difficulty.value] ?? 1,
  protein: fields.protein.value,
  produce: fields.produce.value,
  spice: fields.spice.value,
  cookingOil: fields.cookingOil.value,
  volume: fields.volume.value ? Number(fields.volume.value) : 0,
  serves: fields.serves.value ? Number(fields.serves.value) : 0,
  authenticity: fields.authenticity.value,
  stock: fields.stock.value,
})