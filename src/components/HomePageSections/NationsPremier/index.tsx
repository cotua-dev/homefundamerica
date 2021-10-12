import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import * as styles from './NationsPremier.module.scss';

const NationsPremier: FunctionComponent = () =>
(
    <section className={styles.nationsPremierSection}>
        <div className={styles.contentWrapper}>
            <h1 className={styles.title}>Nation's Premier</h1>
            <h1 className={styles.title}>Mortgage Lender</h1>
            <h3 className={styles.subtitle}>
                Mortgages for Self-Employed
                Borrowers and Investors
            </h3>
            <p className={styles.paragraph}>
                We have made the mortgage process fast and easy
                to reduce costs, unnecessary steps, and
                time-wasting appointments. So what are you
                waiting for? Click the button below to get
                started!
            </p>
            <Link
                className={styles.getStartedButtonLink}
                to="/conventional"
            >
                <button
                    className={styles.getStartedButton}
                    type="button"
                >Get Started</button>
            </Link>
            <a
                className={styles.phoneNumber}
                href="tel:8888186393"
            >(888) 818-6393</a>
        </div>
    </section>
);

export default NationsPremier;
