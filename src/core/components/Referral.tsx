import React from 'react';
import Image from 'next/image';
import sucess from '../../assets/success.svg';
import styles from '../../styles/components/referral.module.scss';
import { useMediaQuery } from 'react-responsive';

export default function Referral() {
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <div className={styles.referralContainer}>
      <span>
        <Image src={sucess} alt='Success' priority />
        <p id={styles.confirmation}>Your email is confirmed!</p>
      </span>
      <section id={styles.inputCopy}>
        <p>https://ratepunk.com/referral</p>
        <button>{isMobile ? 'Copy URL' : 'Copy'}</button>
      </section>
    </div>
  );
}
