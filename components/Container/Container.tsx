import React, { FC } from 'react';
import styles from './Container.module.scss';

export const Container: FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}
