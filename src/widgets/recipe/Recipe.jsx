import styles from './Recipe.module.scss';
import { AddRecipe } from 'features/add-recipe';
import { DIFFICULTY_MAP } from 'entities/recipe/constants';
import classNames from 'classnames';
import { RecipeItem } from 'widgets/recipe/components/recipe-item';

export const Recipe = ({ recipe, isLoading }) => {
  if (isLoading) {
    return 'Loading...';
  }

  if (!recipe) {
    return null;
  }

  const difficulty = DIFFICULTY_MAP[recipe.difficulty];

  return (
    <div className={styles['recipe']}>
      <div className={styles['recipe-header']}>
        <div className={styles['recipe-info']}>
          {recipe.image && <img src={recipe.image} alt={recipe.name} />}
          <span className={styles['recipe-name']}>{recipe.name}</span>
        </div>
        <AddRecipe />
      </div>
      <div className={styles['recipe-difficulty']}>
        <div className={classNames(styles['recipe-difficulty-inner'], {
          [styles[`recipe-difficulty-inner-${recipe.difficulty}`]]: recipe.difficulty,
        })}>
          <p className={styles['recipe-difficulty-title']}>Difficulty: {difficulty}</p>
          <div>{recipe.description}</div>
        </div>
      </div>
      <div className={styles['recipe-body']}>
        <RecipeItem value={recipe.protein} title="Protein" />
        <RecipeItem value={recipe.spice} title="Spice Level" />
        <RecipeItem value={recipe.spice} title="Spices" />
        <RecipeItem value={recipe.cookingOil} title="Cooking Oil" />
        <RecipeItem value={recipe.volume} title="Volume/Weight" />
        <RecipeItem value={recipe.serves} title="Serves" />
        <RecipeItem value={recipe.authenticity} title="Authenticity" />
        <RecipeItem value={recipe.stock} title="Stock" />
      </div>
    </div>
  );
};