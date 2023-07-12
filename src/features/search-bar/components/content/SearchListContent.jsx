import { Combobox, } from '@headlessui/react';

import styles from './SearchListContent.module.scss';
import classNames from 'classnames';
import { DIFFICULTY_MAP } from 'entities/recipe/constants';
import { DifficultyIcon } from 'shared/icons';

export const SearchListContent = ({ query, list }) => {
  if (!list?.length && query !== '') {
    return (
      <div>
        Nothing found.
      </div>
    )
  }

  return (
    list.map((item) => (
      <Combobox.Option
        key={item.id}
        value={item}
      >
        {({ selected, active }) => {
          return (
            <div
              className={classNames(styles['item'], {
                [styles['item-selected']]: selected,
              })}
            >
              <div className={styles['item-info']}>
                <div className={styles['item-image']}>
                  {item.image && <img src={item.image} alt={item.name} />}
                </div>
                <span>{item.name}</span>
              </div>
              <div className={classNames(styles['item-difficulty'], {
                [styles[`item-difficulty-${item.difficulty}`]]: item.difficulty,
              })}>
                <DifficultyIcon />
                <p>{DIFFICULTY_MAP[item.difficulty]}</p>
              </div>
            </div>
          )
        }}
      </Combobox.Option>
    ))
  );
};