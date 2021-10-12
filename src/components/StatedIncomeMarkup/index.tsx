import React, { FunctionComponent } from 'react';
import { contentWrapper } from '../sharedStyles/shared.module.scss';

const StatedIncomeMarkup: FunctionComponent = () =>
(
    <section className={contentWrapper}>
        <article>
            <h2>What is a Stated Income Loan?</h2>
            <strong>
                Stated Income Loan programs are for self-employed and
                business owners with incomes that are difficult to
                document. MBANC states your income and backstops them with
                bank statements. 
            </strong>
            <p>
                Instead of simply stating what you make, MBANC will ask for at
                least 12 months of bank statements, maybe 24, to determine
                your income. These can be personal bank statements, business
                bank statements, or both. 
            </p>
            <p>
                {`MBANC will then calculate your monthly income by averaging
                those deposits over the accompanying 12- or 24-month period.
                If you're a self-employed borrower, you may also be asked to
                provide a Profit and Loss Statement (P&L) that substantiates
                the deposits.`}
            </p>
            <p>
                Again, everything needs to make sense, and any large deposits
                will be flagged and require explanation. In other words,
                taking out a loan or having someone make deposits into your
                bank account will likely be noticed/scrutinized by the underwriter.
            </p>
            <strong>
                We use 100% of the deposits for Business and Personal Bank Statements.
            </strong>
            <h2>Qualification Criteria</h2>
            <p>
                <strong>Self-Employed</strong> only
            </p>
            <p>
                <strong>90% LTV</strong> up to a loan amount of $1,500,000.00
                with a 680 FICO score (Must have 24 months)
            </p>
            <p>
                <strong>85% LTV</strong> up to a loan amount of $2,500,000.00
                with a 620 FICO score (Can use 12 or 24 Months)
            </p>
            <p>
                <strong>70% LTV</strong> up to a loam amount of 5,000,000.00
                with a 660 FICO score
            </p>
            <p>
                <strong>Up to 85% LTV</strong> Rate and Term and Unlimited Cash
                Out refinances available
            </p>
            <p>
                <strong>Interest</strong> Only Option Available
            </p>
            <p>
                <strong>Max DTI</strong> 50%
            </p>
            <strong>
                Reserve requirements are 6 months PITI up to a $1,500,000.00
                Loan amount, anything above requires 12 months PITI 
            </strong>
            <p>
                12 or 24-Month Bank Statement Program (Bank Deposits used as
                Income In Lieu of Tax Returns) and a Borrower Prepared P & L. 
            </p>
            <p>
                <strong>80% LTV</strong> up to a loan amount of $2,000,000.00
                with a FICO score as low as 580
            </p>
            <p>
                <strong>Only</strong> 24 months Seasoning on Foreclosure / Short Sale
                / Deed in Lieu of Foreclosure and 12 Months Seasoning for a BK
            </p>
            <p>
                <strong>80% LTV</strong> Rate and Term and Unlimited Cash Out refinances
                available
            </p>
            <p>Apply Now For True Stated Income</p>
        </article>
    </section>
);

export default StatedIncomeMarkup;
