import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

import styles from './ReturnBack.module.scss';

export const ReturnBack = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/');
  };

  return (
    <button className={styles['return-back']} onClick={onClickHandler}><ChevronLeftIcon /></button>
  );
};