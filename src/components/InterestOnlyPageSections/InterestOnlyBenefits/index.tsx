import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchInterestOnlyBenefitsImageQuery } from './InterestOnlyBenefits.interfaces';
import { interestOnlyBenefitsSection } from './InterestOnlyBenefits.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const InterestOnlyBenefits: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchInterestOnlyBenefitsImageQuery>(graphql`
        query {
            interestOnlyBenefitsImage: file(name: {eq: "AdobeStock_315056612"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section
            id={interestOnlyBenefitsSection}
            className={sharedStyles.loanNegative}
        >
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.interestOnlyBenefitsImage.publicURL}
                    alt="Interest only benefits image"
                />
            </div>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Interest-Only Mortgage Benefits`}</h2>
                <p>
                    {`
                        Control the terms of your mortgage. With an interest-only
                        mortgage, you can choose to pay the interest only or make
                        a principle payment amount. This customization is helpful
                        for borrowers with fluctuating income who want more control
                        of their terms. Benefits of an Interest-Only Mortgage:
                    `}
                </p>
                <ul>
                    <li>{`Offers initial interest-only payment options`}</li>
                    <li>{`Allows for flexible monthly payments during the initial interest-only term`}</li>
                    <li>{`Gives borrowers the opportunity to make principal payments when they choose`}</li>
                    <li>{`Custom loan tailored for specific needs`}</li>
                </ul>
            </div>
        </section>
    );
}
