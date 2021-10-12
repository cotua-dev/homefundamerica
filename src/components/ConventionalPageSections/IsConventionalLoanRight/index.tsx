import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { moveToStepper } from '../../../utils/moveToStepper';
import { isConventionalLoanRightSection } from './IsConventionalLoanRight.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const IsConventionalLoanRight: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery(graphql`
        query {
            isConventionalLoanRightImage: file(name: {eq: "AdobeStock_301513591"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section id={isConventionalLoanRightSection} className={sharedStyles.loanNegative}>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.isConventionalLoanRightImage.publicURL}
                    alt="Is a conventional loan right image"
                />
            </div>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Is a Conventional Loan right for you?`}</h2>
                <p>
                    {`Conventional Loans are often well-suited for borrowers with:`}
                </p>
                <ul>
                    <li>{`Loan amounts that fall within conventional loan limits`}</li>
                    <li>{`Good or excellent credit`}</li>
                    <li>{`Easy-to-document income`}</li>
                </ul>
                <p>
                    {`
                        Want a loan with more flexibility? A government-backed FHA mortgage
                        could be a better fit. After you apply, we'll review all of your
                        mortgage options with you.
                    `}
                </p>
                <button
                    className={sharedStyles.applyButton}
                    type="button"
                    onClick={moveToStepper}
                >Apply Now</button>
            </div>
        </section>
    );
}
