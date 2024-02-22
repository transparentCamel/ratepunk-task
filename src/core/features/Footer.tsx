import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import email from '../../assets/email-footer.svg';
import styles from '../../styles/features/footer.module.scss';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import tiktok from '../../assets/tiktok.svg';
import SocialButton from '../components/SocialButton';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <Image
          src={logo}
          alt='Ratepunk Logo'
          className={styles.logo}
          width={125}
          height={32}
          priority
        />
        <p className={styles.about}>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you’re getting the best deal!
        </p>
        <p className={styles.legal}>© 2021 Ratepunk. All Rights Reserved.</p>
      </section>
      <section>
        <div>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Price Comparison</li>
            <li>Chrome Extension</li>
            <li>How It Works</li>
            <li>Ratepunk Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <div>
            <h3>CONTACT</h3>
            <span>
              <Image
                src={email}
                alt='Email Svg'
                className={''}
                width={16}
                priority
              />
              <p>hi@ratepunk.com</p>
            </span>
          </div>
          <div>
            <h3>SOCIAL</h3>
            <span>
              <SocialButton svg={instagram} alt={'Instagram'} />
              <SocialButton svg={facebook} alt={'Facebook'} />
              <SocialButton svg={linkedin} alt={'LinkedIn'} />
              <SocialButton svg={twitter} alt={'Twitter'} />
              <SocialButton svg={tiktok} alt={'TikTok'} />
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}
