import React, { FC } from 'react';
import { Link } from '../../types/Link';
import styles from './NavLink.module.scss';

interface NavLinkProps {
    link: Link
    onClick: (id: number) => void
}

export const NavLink: FC<NavLinkProps> = ({link, onClick}) => {
  return (
    <li className={`${styles.navlink} ${link.active && styles['active']}`} onClick={() => onClick(link.id)}>
        <a className={styles.link}>{link.text}</a>
    </li>
  )
}
