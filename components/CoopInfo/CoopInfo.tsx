import React from 'react';
import styles from './CoopInfo.module.scss';

export const CoopInfo = () => {
  return (
    <section className={styles.info}>
        <h1 className={styles.info_title}>Сотрудничество</h1>
        <div className={styles.info_phone}>
            <span>по вопросам сотрудничества</span>
            <a href="tel:+74951112233">+7 (495) 111-22-33</a>
        </div>
    </section>
  )
}
