import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/socialButton.module.scss';

interface SocialButtonProps {
  svg: string;
  alt: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ svg, alt }) => {
  return (
    <button className={styles.button}>
      <Image src={svg} alt={alt} width={16} height={16} priority />
    </button>
  );
};

export default SocialButton;
