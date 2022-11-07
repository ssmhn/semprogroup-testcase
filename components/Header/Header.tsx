import React, { useState } from 'react'
import styles from './Header.module.scss';
import { links } from '../../mock-data';
import { Link } from '../../types/Link';
import { NavLink } from '../../ui/NavLink/NavLink';
import { Container } from '../Container/Container';

export const Header = () => {
    const [navLinks, setNavLinks] = useState<Link[]>(links)

    const onClick = (id: number) => {
        setNavLinks(navLinks.map(link => {
            if (link.active && link.id !== id) return {...link, active: false}
            if (link.id === id) return {...link, active: true}
            return link
        }))
    }

  return (
    <header className={styles.header}>
        <Container>
            <div className={styles.header_inner}>
                <div className={styles.header_logo}>
                    LOGO
                </div>
                <nav className={styles.header_nav}>
                    <ul>
                        {
                            navLinks.map(link => (
                                <NavLink key={link.id} link={link} onClick={onClick} />
                            ))
                        }
                    </ul>
                </nav>
                <div className={styles.toggle_menu}>
                    <input id="burger" type="checkbox" />
                    <label htmlFor="burger">
                        <span />
                        <span />
                        <span />
                    </label>
                    <nav>    
                        <ul>
                            {
                                navLinks.map(link => (
                                    <NavLink key={link.id} link={link} onClick={onClick} />
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </Container>
    </header>
  )
}
