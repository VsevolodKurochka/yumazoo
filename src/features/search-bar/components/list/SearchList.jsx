import { Combobox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import styles from './SearchList.module.scss';
import { SearchListContent } from '../content/SearchListContent';

export const SearchList = ({ query, list, reset }) => {
  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={reset}
    >
      <Combobox.Options as="div" className={styles['list']}>
        <SearchListContent
          list={list}
          query={query}
        />
      </Combobox.Options>
    </Transition>
  );
};