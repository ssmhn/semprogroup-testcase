import React, { FC } from 'react';
import styles from './Button.module.scss';


export const Button: FC<React.ComponentPropsWithRef<'button'>> = ({children, onClick, type, ...props}) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick} 
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}
