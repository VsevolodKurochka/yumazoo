import styles from './RecipeItem.module.scss';

export const RecipeItem = ({ title, value }) => {
  return (
    <div className={styles['recipe-item']}>
      <div className={styles['recipe-item-title']}>
        {title}
      </div>
      <div className={styles['recipe-item-value']}>
        {value}
      </div>
    </div>
  );
};