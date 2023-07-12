import { Button } from 'shared/components/button';
import { useNavigate } from 'react-router-dom';

export const AddRecipe = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/add-recipe');
  };

  return (
    <Button onClick={onClickHandler}>+ Add Recipe</Button>
  )
};