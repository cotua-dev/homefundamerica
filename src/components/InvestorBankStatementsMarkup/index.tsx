import React, { FunctionComponent } from 'react';
import { contentWrapper } from '../sharedStyles/shared.module.scss';

const InvestorBankStatementsMarkup: FunctionComponent = () =>
(
    <section className={contentWrapper}>
        <article>
            <h2>What is an Investor Bank Statement Loan?</h2>
            <strong>
                In short, we use 2 years of personal or business
                bank statements and a P & L (profit and loss)
                statement to verify proof of income, instead of
                tax returns.
            </strong>
            <p>
                {`MBANC understands what it means to own a business.
                We know that owning a small business, start-up, or
                having another form of untraditional income makes
                homeownership a more difficult feat. That's why we
                offer this flexible mortgage program to sidestep some
                of those challenges and create a clear path to ownership.`}
            </p>
            <h2>Qualification Criteria</h2>
            <p>
                <strong>85% LTV</strong> up to a loan amount of
                $1,500,000.00 with a 680 FICO score (SFR Only)
            </p>
            <p>
                <strong>70% LTV</strong> Rate and Term and Unlimited
                Cash Out refinances available
            </p>
            <p>
                <strong>Reserve requirements</strong> are 6 months
                PITI up to a $1,500,000.00 Loan amount, anything
                above requires 12 months PITI
            </p>
            <p>
                <strong>Cash Out</strong> can be used as reserves
            </p>
            <p>
                <strong>Cash Vest</strong> in LLC or Corporation
            </p>
            <p>Apply Now For True Stated Income</p>
        </article>
    </section>
);

export default InvestorBankStatementsMarkup;
