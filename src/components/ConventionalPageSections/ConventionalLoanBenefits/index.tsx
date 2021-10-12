import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchConventionalLoanBenefitsImageQuery } from './ConventionalLoanBenefits.interfaces';
import { moveToStepper } from '../../../utils/moveToStepper';
import { conventionalLoanBenefitsSection } from './ConventionalLoanBenefits.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const ConventionalLoanBenefits: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchConventionalLoanBenefitsImageQuery>(graphql`
        query {
            conventionalLoanBenefitsImage: file(name: {eq: "AdobeStock_261487920"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section id={conventionalLoanBenefitsSection} className={sharedStyles.loanNegative}>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.conventionalLoanBenefitsImage.publicURL}
                    alt="Conventional loan benefits image"
                />
            </div>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Conventional Loan Benefits`}</h2>
                <p>
                    {`
                        A Conventional Loan can be an option if your mortgage amount
                        doesn’t exceed the conventional loan limit, $510,400 for most
                        U.S. counties.
                    `}
                </p>
                <ul>
                    <li>
                        {`One of the lowest fixed interest rates available`}
                    </li>
                    <li>
                        {`The flexibility of either a fixed-rate or an adjustable-rate mortgage (ARM)`}
                    </li>
                </ul>
                <button
                    className={sharedStyles.applyButton}
                    type="button"
                    onClick={moveToStepper}
                >Apply Now</button>
            </div>
        </section>
    );
}
