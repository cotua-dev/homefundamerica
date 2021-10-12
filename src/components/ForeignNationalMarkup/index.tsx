import React, { FunctionComponent } from 'react';
import { contentWrapper } from '../sharedStyles/shared.module.scss';

const ForeignNationalMarkup: FunctionComponent = () =>
(
    <section className={contentWrapper}>
        <article>
            <h2>What is a Foreign National Loan?</h2>
            <strong>
                Foreign National Loan is for those who lack
                residency in the US and wants to purchase
                second home, or investment property.
            </strong>
            <p>
                {`If you're a Foreign National and looking to
                purchase a second home or investment property
                MBANC can help you get qualified.`}
            </p>
            <p>
                MBANC offers the foreign national program for
                Non-US citizens authorized to live in the US
                on a temporary basis via Visa and a Passport
                from foreign country of residence. However, in
                some cases, Visa is not required if they meet
                the state departments Visa waiver program.
            </p>
            <h2>Qualification Criteria</h2>
            <p>
                <strong>No Employment</strong> or income is required.
            </p>
            <p>
                <strong>Credit Score</strong> is not a factor.
            </p>
            <p>
                <strong>DTI</strong> is not needed.
            </p>
            <p>
                <strong>Up to $500,000</strong> cash out is allowed.
            </p>
            <p>
                <strong>Cash Out</strong> can be used as reserves.
            </p>
            <p>
                <strong>Up to $1,500,000</strong> loan amounts.
            </p>
            <p>
                <strong>75% LTV</strong> on purchase.
            </p>
            <p>
                <strong>75% LTV</strong> on rate and term.
            </p>
            <p>
                <strong>70% LTV</strong> on cash out.
            </p>
            <p>
                <strong>Investment</strong> properties only.
            </p>
            <p>
                <strong>Reserves</strong> are not needed.
            </p>
            <p>Apply Now For True Stated Income</p>
        </article>
    </section>
);

export default ForeignNationalMarkup;
