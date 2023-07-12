export const AUTHENTICITY = {
  VERIFIED: 'Verified',
  UNVERIFIED: 'Unverified',
};

const DIFFICULTY_HARD = 3;
const DIFFICULTY_MEDIUM = 2;
const DIFFICULTY_EASY = 1;

export const DIFFICULTY_MAP = {
  [DIFFICULTY_EASY]: 'Easy',
  [DIFFICULTY_MEDIUM]: 'Medium',
  [DIFFICULTY_HARD]: 'Hard',
};

export const DIFFICULTY_SAVE_MAP = {
  'Easy': DIFFICULTY_EASY,
  'Medium': DIFFICULTY_MEDIUM,
  'Hard': DIFFICULTY_HARD,
}

export const RECIPES_COUNTRIES = {
  IN: 'IN',
  SP: 'SP',
  VT: 'VT',
  TH: 'TH',
  IT: 'IT',
}

export const RECIPES_COUNTRIES_LABELS = {
  [RECIPES_COUNTRIES.IN]: 'India',
  [RECIPES_COUNTRIES.SP]: 'Spain',
  [RECIPES_COUNTRIES.VT]: 'Vietnam',
  [RECIPES_COUNTRIES.TH]: 'Thailand',
  [RECIPES_COUNTRIES.IT]: 'Italia'
}

export const RECIPES_IMAGES = {
  [RECIPES_COUNTRIES.IN]: '/icons/india.png',
  [RECIPES_COUNTRIES.SP]: '/icons/spain.png',
  [RECIPES_COUNTRIES.VT]: '/icons/vietnam.png',
  [RECIPES_COUNTRIES.TH]: '/icons/thailand.png',
  [RECIPES_COUNTRIES.IT]: '/icons/italia.png'
}