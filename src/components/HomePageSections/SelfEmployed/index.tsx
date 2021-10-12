import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import * as styles from './SelfEmployed.module.scss';

const SelfEmployed: FunctionComponent = () =>
(
    <section className={styles.selfEmployedSection}>
        <div className={styles.contentWrapper}>
            <h1 className={styles.title}>Are you self-employed</h1>
            <h1 className={styles.title}>and need a mortgage?</h1>
            <h1 className={styles.title}>We can Help!</h1>
            <h3 className={styles.subtitle}>Self-employed borrowers looking
            for a mortgage can qualify without tax
            returns</h3>
            <Link
                className={styles.applyNowButtonLink}
                to="/conventional"
            >
                <button
                    className={styles.applyNowButton}
                    type="button"
                >Apply Now</button>
            </Link>
            <a
                className={styles.phoneNumber}
                href="tel:8888186393"
            >(888) 818-6393</a>
        </div>
    </section>
);

export default SelfEmployed;
