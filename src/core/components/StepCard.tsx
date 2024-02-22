import React from 'react';
import Image from 'next/image';

import styles from '../../styles/components/stepCard.module.scss';

interface StepCardProps {
  svg: string;
  alt: string;
  step: string;
  heading: string;
  paragraph: string;
  reverse: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  svg,
  alt,
  step,
  heading,
  paragraph,
  reverse,
}) => {
  return (
    <div
      className={`${styles.container} ${
        reverse ? styles['flex-row-reverse'] : styles['flex-row']
      }`}
    >
      <span>
        <Image src={svg} alt={alt} priority />
      </span>

      <div>
        <p className={styles.step}>{step}</p>
        <h2>{heading}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </div>
  );
};

export default StepCard;
