import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import {
    FetchIsFHALoanRightImageQuery,
    Reason,
} from './IsFHALoanRight.interfaces';
import { isFHALoanRightSection } from './IsFHALoanRight.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const IsFHALoanRight: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchIsFHALoanRightImageQuery>(graphql`
        query {
            isFHALoanRightImage: file(name: {eq: "AdobeStock_338493617"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    const listOfReasons: Reason[] = [
        {
            key: 0,
            reason: 'To take advantage of flexible qualifications and credit requirements',
        },
        {
            key: 1,
            reason: 'When your down payment of home equity is less than 20% of the loan amount',
        },
        {
            key: 2,
            reason: 'To reduce monthly mortgage payments by refinancing an existing loan',
        },
        {
            key: 3,
            reason: 'To access home equity through a cash-out refinance option',
        },
    ];

    return (
        <section
            id={isFHALoanRightSection}
            className={sharedStyles.loanNegative}
        >
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.isFHALoanRightImage.publicURL}
                    alt="Is FHA loan right image"
                />
            </div>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Is an FHA Loan Right For You?`}</h2>
                <strong>{`Situations in which an FHA loan makes sense:`}</strong>
                <ul>
                    {listOfReasons.map((reason: Reason) => (
                        <li key={reason.key}>{reason.reason}</li>
                    ))}
                </ul>
                <button
                    className={sharedStyles.applyButton}
                    type="button"
                >Apply Now</button>
            </div>
        </section>
    );
}
