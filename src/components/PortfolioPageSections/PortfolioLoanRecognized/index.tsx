import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchPortfolioLoanRecognizedImageQuery } from './PortfolioLoanRecognized.interfaces';
import { portfolioLoanRecognizedSection } from './PortfolioLoanRecognized.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const PortfolioLoanRecognized: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchPortfolioLoanRecognizedImageQuery>(graphql`
        query {
            portfolioLoanRecognizedImage: file(name: {eq: "AdobeStock_850945"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section
            id={portfolioLoanRecognizedSection}
            className={sharedStyles.loanNegative}
        >
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Why Is Manhattan Banc Nationally Recognized For Portfolio Loans`}</h2>
                <p>
                    {`
                        We are an industry-leading Portfolio Lender because we
                        are experts at designing custom loans for unique financial
                        needs and properties.
                    `}
                </p>
                <p>
                    {`
                        Some distinctive features of our Portfolio Loan program include:
                    `}
                </p>
                <ul>
                    <li>{`Loan amounts of up to $30 million`}</li>
                    <li>{`
                        We lend on investment properties, high land-to-home values, agency
                        project condo financing, vacation homes and other unique properties
                        are considered with no limits on acreage
                    `}</li>
                    <li>{`
                        Program that permits a title to be vested into an LLC, trust,
                        partnership, or sub S corporation
                    `}</li>
                    <li>{`
                        Asset-Based Lending Programs that allow 90% LTV (loan-to-value ratio)
                        with pledged assets
                    `}</li>
                    <li>{`
                        Permits purchase of a home with no money down, through cross
                        collateralization of a free and clear property (restrictions apply)
                    `}</li>
                </ul>
            </div>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.portfolioLoanRecognizedImage.publicURL}
                    alt="Portfolio loan recognized image"
                />
            </div>
        </section>
    );
}
