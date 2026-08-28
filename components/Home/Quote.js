import React from 'react';
import Link from "next/link";
import styles from './Quote.module.css';

const Quote = () => {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.heading}>
        <h2 className={styles.quoteHeading}>
          <span className={styles.boldText}>Empowering Organizations With Enhanced Customer Engagement</span>
        </h2>
        <Link href="/contact-us" className={styles.enquireButton}>Enquire Now</Link>
      </div>
      <div className={styles.content}>
        <h3 className={styles.quoteHeading}>
          Unlocking Growth Potential Through Integrated CRM Strategies.
        </h3>
      </div>
    </div>
  );
};

export default Quote;


