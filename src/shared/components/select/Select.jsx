import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import React, { Fragment, memo } from 'react';

import { getOptionById } from './Select.utils';

import styles from './Select.module.scss';

export const Select = memo(({ className, name, mode, onChange, options, value, placeholder }) => {
  const option = getOptionById(options, value);
  const label = Object.keys(option).length ? option.label : placeholder;

  const onUpdateOption = (id) => {
    onChange({
      name,
      value: getOptionById(options, id)
    });
  };

  return (
    <div
      className={classNames(styles['select-wrapper'], className, {
        [styles[`select-wrapper-${mode}`]]: mode,
      })}>
      <Listbox onChange={onUpdateOption} value={value}>
        <div className={styles['select-relative']}>
          <Listbox.Button className={styles['select-button']}>
            {option.image && (
                <img
                  className={styles['select-button-image']}
                  src={option.image}
                />
            )}
            <span className={styles['select-button-label']}>{label}</span>
            <ChevronDownIcon
              aria-hidden="true"
              className={styles['select-icon']}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className={styles['select-options']}>
              {options.map((option, index) => (
                <Listbox.Option
                  className={({ active, selected }) => classNames(styles['select-option'], {
                    [styles['select-option-active']]: active,
                    [styles['select-option-selected']]: selected,
                  })}
                  key={index}
                  value={option.id}>
                  {({selected }) => (
                    <>
                      {selected && (
                        <CheckIcon className={styles['select-option-icon']} />
                      )}
                      {option.image && (
                        <img
                          alt={option.label}
                          className={styles['select-option-image']}
                          src={option.image}
                        />
                      )}
                      {option.label}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
});

Select.displayName = 'Select';
