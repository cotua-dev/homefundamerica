import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
} from 'gatsby';
import { FetchJumboLoanLeaderImageQuery } from './JumboLoanLeader.interfaces';
import { jumboloanLeaderSection } from './JumboLoanLeader.module.scss';
import { moveToStepper } from '../../../utils/moveToStepper';
import * as sharedStyles from '../../sharedStyles/shared.module.scss';

export const JumboLoanLeader: FunctionComponent = (): ReactElement => {
    const queryResult = useStaticQuery<FetchJumboLoanLeaderImageQuery>(graphql`
        query {
            jumboLoanLeaderImage: file(name: {eq: "AdobeStock_267253482"}, extension: {eq: "jpg"}) {
                publicURL
            }
        }
    `);

    return (
        <section
            id={jumboloanLeaderSection}
            className={sharedStyles.loanNegative}
        >
            <div className={sharedStyles.imageWrapper}>
                <img
                    src={queryResult?.jumboLoanLeaderImage.publicURL}
                    alt="Jumbo loan leader image"
                />
            </div>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Why is Manhattan Banc the Leader in Jumbo Loans?`}</h2>
                <ul>
                    <li>{`Experienced professionals who are intimately familiar with luxury home markets`}</li>
                    <li>{`Self-employed borrowers can use bank statements to verify income`}</li>
                    <li>{`Special programs for purchase financing`}</li>
                    <li>{`Loan underwriters who understand complex financial situations`}</li>
                    <li>{`Fixed Rate and Adjustable Rate Mortgage (ARM) loans with Interest-Only Mortgage Options`}</li>
                    <li>{`Asset Utilization: use your liquid assets to assist in meeting full doc debt-to-income (DTI) ratio requirements`}</li>
                    <li>{`Pledged Assets: finance up to 90% of a home's value by pledging security assets or savings in lieu of a down payment`}</li>
                    <li>{`Cross Collateralization: finance up to 100% of a home's value through securing the loan against an additional free and clear property`}</li>
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
