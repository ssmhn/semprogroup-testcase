import React, { FC } from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox: FC<React.ComponentPropsWithRef<'input'>> = ({...props}) => {
  return (
    <div className={styles.checkbox}>
        <label className={`${styles.control} ${styles.control_checkbox}`}>
            заполняя форму, вы даёте
            <a>согласие на обработку персональных данных</a>
            <input type="checkbox" {...props} />
            <div className={styles.control_indicator} />
        </label>

    </div>
  )
}
