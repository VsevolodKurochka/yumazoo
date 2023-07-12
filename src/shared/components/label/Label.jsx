import classNames from 'classnames';
import React from 'react';

import styles from './Label.module.scss';
import { getCurrentFieldErrors } from 'shared/components/label/Label.utils';

export const Label = ({ children, className, label, name, errors }) => {
  const currentFieldErrors = getCurrentFieldErrors(errors, name);

  const hasErrors = currentFieldErrors && currentFieldErrors?.length;

  return (
    <div className={classNames(styles['label'], className)}>
      <label className={styles['label-info']} htmlFor={name}>
        {label}
      </label>
      {children}
      {hasErrors && (
        <div className={styles['label-error']}>
          {currentFieldErrors.map((error, index) => <p key={index}>{error.message}</p>)}
        </div>
      )}
    </div>
  )
};