import styles from '../styles/pages/landing.module.scss';
import Image from 'next/image';
import envelope from '../assets/email.svg';
import StepCard from '@/core/components/StepCard';
import invite from '../assets/invite.svg';
import coins from '../assets/collect-coins.svg';
import voucher from '../assets/voucher.svg';
import StoreCard from '@/core/components/StoreCard';
import chrome from '../assets/chrome.svg';
import apple from '../assets/apple.svg';
import star from '../assets/star-solid.svg';
import Form from '@/core/features/Form';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.topContainer}>
        <Form />
        <div className={styles.stepCardContainer}>
          <StepCard
            svg={invite}
            alt='invite'
            step='STEP 1'
            heading='INVITE FRIENDS'
            paragraph='Refer friends with your unique referral link.'
            reverse={false}
          />
          <StepCard
            svg={coins}
            alt='coins'
            step='STEP 2'
            heading='COLLECT COINS'
            paragraph='Get 1 coin for each friend that installs our extension using your referral link.'
            reverse={true}
          />
          <StepCard
            svg={voucher}
            alt='voucher'
            step='STEP 3'
            heading='GET VOUCHER'
            paragraph='Redeem for a $20 hotel booking voucher once you collect 20 coins.'
            reverse={false}
          />
        </div>
      </section>
      <section className={styles.store}>
        <div className={styles.storeCardContainer}>
          <StoreCard
            svg={chrome}
            alt='Chrome web store'
            text='chrome web store'
            href='https://chromewebstore.google.com/detail/ratepunk-hotel-booking-an/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'
          />
          <StoreCard
            href='https://apps.apple.com/us/app/ratepunk-hotel-and-travel/id1607823726'
            svg={apple}
            alt='Apple app store'
            text='apple app store'
          />
        </div>
        <div>
          <span className={styles.starContainer}>
            <Image src={star} alt='star' height={20} priority />
            <Image src={star} alt='star' height={20} priority />
            <Image src={star} alt='star' height={20} priority />
            <Image src={star} alt='star' height={20} priority />
            <Image src={star} alt='star' height={20} priority />
          </span>
          <p className={styles.reviewText}>Chrome Store reviews</p>
        </div>
      </section>
    </main>
  );
}
