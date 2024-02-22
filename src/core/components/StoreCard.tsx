import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/storeCard.module.scss';

interface StoreCardProps {
  svg: string;
  alt: string;
  text: string;
  href: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ svg, alt, text, href }) => {
  return (
    <a href={href} target='_blank' className={styles.mainContainer}>
      <Image src={svg} alt={alt} width={125} height={32} priority />
      <span>
        <p>available in the</p>
        <p>{text}</p>
      </span>
    </a>
  );
};

export default StoreCard;
