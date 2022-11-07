import React, { FC, PropsWithChildren } from 'react';
import styles from './CoopLayout.module.scss';

export const CoopLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.layout}>
        {children}
    </div>
  )
}
