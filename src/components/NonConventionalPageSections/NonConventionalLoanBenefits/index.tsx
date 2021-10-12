import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchNonConventionalLoanBenefitsImageQuery } from './NonConventionalLoanBenefits.interfaces';
import { nonConventionalLoanBenefitsSection } from './NonConventionalLoanBenefits.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const NonConventionalLoanBenefits: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchNonConventionalLoanBenefitsImageQuery>(graphql`
        query {
            nonConventionalLoanBenefitsImage: file(name: {eq: "AdobeStock_300096295"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section id={nonConventionalLoanBenefitsSection} className={sharedStyles.loanNegative}>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.nonConventionalLoanBenefitsImage.publicURL}
                    alt="Non conventional loan benefits image"
                />
            </div>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Non-Conventional Loan Benefits`}</h2>
                <p>
                    {`
                        A Non-Conventional Loan can be an option when your loan
                        amount exceeds the conventional loan limit, $510,400
                        for most U.S. counties.
                    `}
                </p>
                <strong>{`Potential benefits include:`}</strong>
                <ul>
                    <li>{`Jumbo and Super Jumbo loan amounts of up to $25 million or more`}</li>
                    <li>{`Flexibility to choose either a fixed-rate or an adjustable-rate mortgage (ARM)`}</li>
                    <li>{`Personalization for complex financial situations`}</li>
                    <li>{`Financing for non-owner occupied properties`}</li>
                </ul>
            </div>
        </section>
    );
}
