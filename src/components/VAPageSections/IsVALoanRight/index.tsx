import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchIsVALoanRightImageQuery } from './IsVALoanRight.interfaces';
import * as styles from './IsVALoanRight.module.scss';

export const IsVALoanRight: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchIsVALoanRightImageQuery>(graphql`
        query {
            isVALoanRightImage: file(name: {eq: "AdobeStock_107429959"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section id={styles.isVALoanRightSection}>
            <div className={styles.imageWrapper}>
                <img
                    className={styles.isVALoanRightImage}
                    src={queryResult?.isVALoanRightImage.publicURL}
                    alt="Is a VA loan right image"
                />
            </div>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{`Is a VA Loan Right for You?`}</h2>
                <p className={styles.content}>{`A VA loan may be right for you if you:`}</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        {`
                            Veteran who meets the eligibility requirements
                            established by the U.S Department of Veterans
                            Affairs*
                        `}
                    </li>
                    <li className={styles.listItem}>{`Want the option of making no down payment`}</li>
                    <li className={styles.listItem}>
                        {`
                            Want to save money by avoiding monthly Private
                            Mortgage Insurance (PMI) requirements
                        `}
                    </li>
                </ul>
            </div>
        </section>
    );
}
