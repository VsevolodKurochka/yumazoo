import { useCallback, useState } from 'react';

import { SearchIcon } from 'shared/icons';
import { Combobox } from '@headlessui/react';
import { SearchList } from './components/list/SearchList';

import styles from './SearchBar.module.scss';
import { getFilteredList } from './utils/getFilteredList';
import { useFetchRecipeById } from 'entities/recipe';

export const SearchBar = ({ list }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const fetchRecipeById = useFetchRecipeById();

  const onChangeHandler = useCallback((e) => {
    const value = e.target.value;
    if (value) {
      return setQuery(value);
    }

    setSelected(null);
    setQuery('');
  }, []);

  const onSelectHandler = useCallback((data) => {
    setSelected(data);
    fetchRecipeById(data.id);
  }, []);

  const onResetHandler = useCallback(() => {
    setQuery('');
  }, []);

  const filteredList = getFilteredList(list, query);

  return (
    <div>
      <Combobox as="div" value={selected} onChange={onSelectHandler} className={styles['search-box']}>
        <div className={styles['search-bar']}>
          <span className={styles['search-bar-icon']}><SearchIcon /></span>
          <Combobox.Input
            displayValue={(item) => item?.name}
            onChange={onChangeHandler}
            placeholder={'Search Cuisine'}
          />
        </div>
        <SearchList
          list={filteredList}
          query={query}
          reset={onResetHandler}
        />
      </Combobox>
    </div>
  );
};