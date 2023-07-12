import classNames from 'classnames';
import React, { forwardRef, memo } from 'react';

import styles from './Input.module.scss';

export const Input = forwardRef(({
    className,
    disabled,
    icon,
    mode,
    name,
    onChange,
    placeholder,
    type,
    value,
    textarea,
    suffix
  }, ref) => {
    return (
      <div
        className={classNames(styles['input-wrapper'], className, {
          [styles['input-wrapper-icon']]: Boolean(icon),
          [styles[`input-wrapper-${mode}`]]: Boolean(mode),
          [styles[`input-wrapper-has-suffix`]]: Boolean(suffix),
        })}>
        <div className={styles['input-inner']}>
          {textarea ? <textarea
            className={styles['input']}
            disabled={disabled}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            ref={ref}
            id={name}
          /> : <input
            className={styles['input']}
            disabled={disabled}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
            ref={ref}
            id={name}
          />}
          {icon && <span className={styles['input-icon']}>{icon}</span>}
          {suffix && (<div className={styles['input-suffix']}>{suffix}</div>)}
        </div>
      </div>
    );
  });
