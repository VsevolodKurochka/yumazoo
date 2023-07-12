import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import styles from './Button.module.scss';

export const Button = memo(
  ({ children, className, disabled, isLoading, mode, onClick, type }) => {
    return (
      <button
        className={classNames(styles.button, className, {
          [styles[mode]]: mode,
        })}
        disabled={disabled}
        onClick={onClick}
        type={type}>
        {isLoading ? (
          <>
            <span className={styles['button-spinner']} />
            Loading...
          </>
        ) : (
          <>
            {children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  mode: 'default',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  mode: PropTypes.oneOf(['primary', 'default']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button']),
}
