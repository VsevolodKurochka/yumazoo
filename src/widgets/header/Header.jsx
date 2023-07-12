import { ReturnBack } from 'features/return-back';

import styles from './Header.module.scss';

export const Header = ({ title }) => {
  return (
    <div className={styles['header']}>
      <ReturnBack /> {title}
    </div>
  );
}