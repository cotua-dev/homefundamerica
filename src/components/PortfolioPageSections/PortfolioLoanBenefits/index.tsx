import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchPortfolioLoanBenefitsImageQuery } from './PortfolioLoanBenefits.interfaces';
import { portfolioLoanBenefitsSection } from './PortfolioLoanBenefits.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const PortfolioLoanBenefits: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchPortfolioLoanBenefitsImageQuery>(graphql`
        query {
            portfolioLoanBenefitsImage: file(name: {eq: "AdobeStock_283780955"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section
            id={portfolioLoanBenefitsSection}
            className={sharedStyles.loanNegative}
        >
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.portfolioLoanBenefitsImage.publicURL}
                    alt="Portfolio loan benefits image"
                />
            </div>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Portfolio Loan Benefits`}</h2>
                <strong>
                    {`
                        Our Portfolio Loan Program offers many benefits,
                        including:
                    `}
                </strong>
                <ul>
                    <li>{`Loan amounts from $300,000 to $30 million`}</li>
                    <li>{`Underwriting flexibility`}</li>
                    <li>{`Cross Collateralization that reduces or eliminates down payments`}</li>
                    <li>{`Expanded guidelines and specialized features`}</li>
                    <li>{`Interest-only options`}</li>
                    <li>{`Non-Resident Alien Mortgages`}</li>
                    <li>{`Financing options for self-employed borrowers`}</li>
                    <li>{`Bridge financing`}</li>
                    <li>{`Pledged assets in lieu of cash`}</li>
                </ul>
            </div>
        </section>
    );
}
