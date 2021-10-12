import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { moveToStepper } from '../../../utils/moveToStepper';
import { FetchIsNonConventionalLoanRightImageQuery } from './IsNonConventionalLoanRight.interfaces';
import { isNonConventionalLoanRightSection } from './IsNonConventionalLoanRight.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const IsNonConventionalLoanRight: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchIsNonConventionalLoanRightImageQuery>(graphql`
        query {
            isNonConventionalLoanRightImage: file(name: {eq: "AdobeStock_325107268"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section id={isNonConventionalLoanRightSection} className={sharedStyles.loanNegative}>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Is a Non-Conventional Loan Right For You?`}</h2>
                <strong>
                    {`Non-conventional loans may be the right solution when looking for:`}
                </strong>
                <ul>
                    <li>{`Expanded guidelines and enhanced options`}</li>
                    <li>{`Tailored mortgage solutions for unique financial situations`}</li>
                    <li>{`Customized Portfolio Loans and Interest-Only Mortgages`}</li>
                </ul>
                <button
                    className={sharedStyles.applyButton}
                    type="button"
                    onClick={moveToStepper}
                >Apply Now</button>
            </div>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.isNonConventionalLoanRightImage.publicURL}
                    alt="Is a non conventional loan right image"
                />
            </div>
        </section>
    );
}
