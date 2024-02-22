'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import styles from '../../styles/features/header.module.scss';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
export default function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt='Ratepunk Logo'
        className={styles.logo}
        width={125}
        height={32}
        priority
      />
      <Image
        src={clicked ? close : menu}
        alt={clicked ? 'Close' : 'Menu'}
        className={styles.hamburger}
        width={16}
        height={16}
        priority
        onClick={() => setClicked(!clicked)}
      />

      <nav className={`${styles.nav} ${clicked ? '' : styles['display-none']}`}>
        <ul>
          <li>Chrome Extension</li>
          <li>Price Comparison</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}
