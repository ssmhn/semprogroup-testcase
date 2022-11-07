import React, { FC } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps extends React.ComponentPropsWithRef<'textarea'> {
    name: string,
    placeholder: string,
    value: string
}

export const Textarea: FC<TextareaProps> = ({name, value, placeholder, ...props}) => {
    return (
        <div className={styles.input}>
            <textarea name={name} value={value} {...props} required />
            <span className={styles.bar} />
            <label>{placeholder}</label>
        </div>
    )
}
