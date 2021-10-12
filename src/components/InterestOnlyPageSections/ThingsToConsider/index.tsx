import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchThingsToConsiderImageQuery } from './ThingsToConsider.interfaces';
import { thingsToConsiderSection } from './ThingsToConsider.module.scss';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const ThingsToConsider: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchThingsToConsiderImageQuery>(graphql`
        query {
            thingsToConsiderImage: file(name: {eq: "AdobeStock_201491395"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section
            id={thingsToConsiderSection}
            className={sharedStyles.loanNegative}
        >
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Things to Consider with Interest-Only Mortgages`}</h2>
                <p>
                    {`
                        Interest-Only Mortgages can provide some unique benefits,
                        but they are not right for everyone.
                    `}
                </p>
                <p>
                    {`
                        Things to be conscious of when considering an interest-only
                        option:
                    `}
                </p>
                <ul>
                    <li>{`The interest-only payment does not pay down the principal balance`}</li>
                    <li>{`The monthly payment following the interest-only period will be higher than that of a fully amortized loan that was originated at the same time`}</li>
                    <li>{`The monthly payment will increase after the initial interest-only term ends`}</li>
                </ul>
            </div>
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.thingsToConsiderImage.publicURL}
                    alt="Things to consider image"
                />
            </div>
        </section>
    );
}
