import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchJumboLoanBenefitsImageQuery } from './JumboLoanBenefits.interfaces';
import { jumboLoanBenefitsSection } from './JumboLoanBenefits.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const JumboLoanBenefits: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchJumboLoanBenefitsImageQuery>(graphql`
        query {
            jumboLoanBenefitsImage: file(name: {eq: "AdobeStock_267403891"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section
            id={jumboLoanBenefitsSection}
            className={sharedStyles.loanNegative}
        >
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Jumbo & Super Jumbo Loan Benefits`}</h2>
                <p>
                    {`
                        As a premier provider of million dollar home loans,
                        Manhattan Banc is expert at accommodating large loan
                        amounts and creating custom mortgage solutions:
                    `}
                </p>
                <ul>
                    <li>{`Loan amounts up to $30 million`}</li>
                    <li>{`Bank Statement Loans`}</li>
                    <li>{`Underwriting Flexibility`}</li>
                    <li>{`Portfolio Loan Options`}</li>
                    <li>{`Extensive range of mortgage programs and options`}</li>
                    <li>{`Interest-only options available`}</li>
                    <li>{`Unique properties considered`}</li>
                    <li>{`90% financing on purchase loans`}</li>
                    <li>{`Highly competitive non-resident alien programs`}</li>
                </ul>
            </div>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.jumboLoanBenefitsImage.publicURL}
                    alt="Jumbo loan benefits image"
                />
            </div>
        </section>
    );
}
