'use client';
import React, { useState, FormEvent } from 'react';
import styles from '../../styles/features/form.module.scss';
import Image from 'next/image';
import envelope from '../../assets/email.svg';
import Referral from '../components/Referral';

export default function Form() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitClicked(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);

    if (isValid) {
      await saveEmail();
    }
  };

  const saveEmail = async () => {
    try {
      const existingDataResponse = await fetch(
        'https://api.jsonbin.io/v3/b/65d6ffdf266cfc3fde8dac81',
        {
          headers: {
            'X-Master-Key':
              '$2a$10$BTE195g/B6ddNK7m84ZX7.xQ5ZRETCl./EkThAOMDYJqHYKHPwD.C',
          },
        }
      );

      if (existingDataResponse.ok) {
        const updatedData = {
          lastEmail: email,
        };

        const saveResponse = await fetch(
          'https://api.jsonbin.io/v3/b/65d6ffdf266cfc3fde8dac81',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key':
                '$2a$10$BTE195g/B6ddNK7m84ZX7.xQ5ZRETCl./EkThAOMDYJqHYKHPwD.C',
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (saveResponse.ok) {
          console.log('Email saved successfully');
        } else {
          console.error('Error saving email:', saveResponse.statusText);
        }
      } else {
        console.error(
          'Error fetching existing data:',
          existingDataResponse.statusText
        );
      }
    } catch (error) {
      console.error('Error saving email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>REFER FRIENDS AND GET REWARDS</h1>
      <p className={styles.paragraph}>
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      {isValidEmail && submitClicked ? (
        <Referral />
      ) : (
        <div>
          {submitClicked && !isValidEmail && (
            <p id={styles.error}>Error State</p>
          )}
          <span className={styles.field}>
            <Image
              src={envelope}
              alt='Envelope'
              width={20}
              className={styles.envelope}
              priority
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address'
              value={email}
              onChange={handleEmailChange}
            />
          </span>
          <button type='submit' id={styles.submit}>
            Get Referral Link
          </button>
        </div>
      )}

      <p className={styles.reward}>Limits on max rewards apply.</p>
    </form>
  );
}
