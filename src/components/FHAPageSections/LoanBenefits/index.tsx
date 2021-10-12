import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Benefit } from './LoanBenefits.interfaces';
import * as styles from './LoanBenefits.module.scss';

export const LoanBenefits: FunctionComponent = (): ReactElement => {
    const benefitsSetOne: Benefit[] = [
        {
            key: 0,
            benefit: 'Down payments as low as 3.5%',
        },
        {
            key: 1,
            benefit: 'Lower credit scores are accepted',
        },
        {
            key: 2,
            benefit: 'Flexible qualification guidelines',
        },
    ];

    const benefitsSetTwo: Benefit[] = [
        {
            key: 3,
            benefit: 'Fixed-rate and adjustable-rate loan options',
        },
        {
            key: 4,
            benefit: 'Refinance up to 96.5% of current home value',
        },
        {
            key: 5,
            benefit: 'Cash out and debt consolidation financing available',
        },
    ];

    return (
        <section id={styles.loanBenefitsSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.loanBenefitsTitle}>Loan Benefits</h2>
                <div className={styles.benefitsWrapper}>
                    <div className={styles.benefits}>
                        {benefitsSetOne.map((benefit: Benefit) => (
                            <div className={styles.benefit} key={benefit.key}>
                                <FontAwesomeIcon className={styles.icon} icon={faCheck}/>
                                <strong>{benefit.benefit}</strong>
                            </div>
                        ))}
                    </div>
                    <div className={styles.benefits}>
                        {benefitsSetTwo.map((benefit: Benefit) => (
                            <div className={styles.benefit} key={benefit.key}>
                                <FontAwesomeIcon className={styles.icon} icon={faCheck}/>
                                <strong>{benefit.benefit}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
