import React, { FC } from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
    name: string,
    placeholder: string,
    value: string
}

export const Input: FC<InputProps> = ({name, value, placeholder, ...props}) => {
    return (
        <div className={styles.input}>
            <input type="text" name={name} value={value} {...props} required />
            <span className={styles.bar} />
            <label>{placeholder}</label>
        </div>
    )
}
