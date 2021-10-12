import React, { FunctionComponent } from 'react';
import { contentWrapper } from '../sharedStyles/shared.module.scss';

const InvestorNoDocMarkup: FunctionComponent = () =>
(
    <section className={contentWrapper}>
        <article>
            <h2>What is an Investor No Doc Loan?</h2>
            <strong>
                {`Allows an investor to purchase or refinance a
                home without jumping through all the hoops of
                providing income doucmentation. It's based solely
                on the merit of the credit score of the client
                and LTV. It is ideal for investors with multiple
                properties or an investor who doesn't want to go
                through the headache of documenting income.`}
            </strong>
            <h2>Qualification Criteria</h2>
            <p>
                <strong>Self-Employed</strong> only
            </p>
            <p>
                <strong>75% LTV</strong> up to a loan amount of
                $2,000,000.00 with a FICO score as low as 660
            </p>
            <p>
                <strong>70% LTV</strong> up to a loan amount of
                $2,000,000.00 with a FICO score as low as 660
                for 2 - 4 Units
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

// const InvestorNoDocMarkup: FunctionComponent = () =>
// (
//     <Section>
//         <ContentWrapper>
//             <H2>What is an Investor No Doc Loan?</H2>
//             <Strong>
//                 Allows an investor to purchase or refinance a
//                 home without jumping through all the hoops of
//                 providing income doucmentation. It's based solely
//                 on the merit of the credit score of the client
//                 and LTV. It is ideal for investors with multiple
//                 properties or an investor who doesn't want to go
//                 through the headache of documenting income.
//             </Strong>
//             <H2>Qualification Criteria</H2>
//             <P>
//                 <Strong>Self-Employed</Strong> only
//             </P>
//             <P>
//                 <Strong>75% LTV</Strong> up to a loan amount of
//                 $2,000,000.00 with a FICO score as low as 660
//             </P>
//             <P>
//                 <Strong>70% LTV</Strong> up to a loan amount of
//                 $2,000,000.00 with a FICO score as low as 660
//                 for 2 - 4 Units
//             </P>
//             <P>
//                 <Strong>70% LTV</Strong> Rate and Term and Unlimited
//                 Cash Out refinances available
//             </P>
//             <P>
//                 <Strong>Reserve requirements</Strong> are 6 months
//                 PITI up to a $1,500,000.00 Loan amount, anything
//                 above requires 12 months PITI
//             </P>
//             <P>
//                 <Strong>Cash Out</Strong> can be used as reserves
//             </P>
//             <P>
//                 <Strong>Cash Vest</Strong> in LLC or Corporation
//             </P>
//             <P>Apply Now For True Stated Income</P>
//         </ContentWrapper>
//     </Section>
// );

export default InvestorNoDocMarkup;
