import React, {
    FunctionComponent,
    useState,
} from 'react';
import {
    State,
    DetailsContent,
} from './Investor.interfaces';
import * as styles from './Investor.module.scss';

const Investor: FunctionComponent = () =>
{
    const initialState: State = { selected: 0 };
    const [state, setState] = useState<State>(initialState);

    /**
     * Set the selected detail to show
     * 
     * @param selected Number indicating which detail to show
     * @return void
     */
    const setSelected = (selected = 0): void => setState(() => ({ selected }));

    const detailsContent: DetailsContent[] = [
        {
            key: 0,
            title: 'No Income Check',
            content: 'No tax returns, W2s and/or paystubs needed',
        },
        {
            key: 1,
            title: 'Qualify With Rental Income',
            content: 'Use the full cash flow of the property to qualify in lieu of tax returns and/or pay stubs. No income check required',
        },
        {
            key: 2,
            title: 'Airbnb Properties, OK',
            content: 'Qualify with your Airbnb income',
        },
        {
            key: 3,
            title: 'Purchase Up To 80% LTV',
            content: '80% LTV up to a loan amount of $1,000,000.00 with a minimum FICO score of 700 (At least an even DSCR required). Cash out up to 70% LTV',
        },
    ];

    return (
        <section className={styles.investorSection}>
            <div className={styles.contentWrapper}>
                <h3 className={styles.title}>
                    Investor? Looking to Purchase or Refinance?
                </h3>
                <div className={styles.detailsWrapper}>
                    <div className={styles.detailsTitlesWrapper}>
                        {detailsContent.map((detailContent: DetailsContent) =>
                        (
                            <h2
                                className={styles.detailsTitle}
                                key={detailContent.key}
                                onMouseEnter={(): void => setSelected(detailContent.key)}
                            >{detailContent.title}</h2>
                        ))}
                    </div>
                    <div className={styles.detailsContentWrapper}>
                    {state.selected === 0 &&
                        <div className={styles.detailsContent}>
                            <strong className={styles.detailsContentTitle}>
                                {detailsContent[0].title}
                            </strong>
                            <p className={styles.detailsContentParagraph}>
                                {detailsContent[0].content}
                            </p>
                        </div>
                    }
                    {state.selected === 1 &&
                        <div className={styles.detailsContent}>
                            <strong className={styles.detailsContentTitle}>
                                {detailsContent[1].title}
                            </strong>
                            <p className={styles.detailsContentParagraph}>
                                {detailsContent[1].content}
                            </p>
                        </div>
                    }
                    {state.selected === 2 &&
                        <div className={styles.detailsContent}>
                            <strong className={styles.detailsContentTitle}>
                                {detailsContent[2].title}
                            </strong>
                            <p className={styles.detailsContentParagraph}>
                                {detailsContent[2].content}
                            </p>
                        </div>
                    }
                    {state.selected === 3 &&
                        <div className={styles.detailsContent}>
                            <strong className={styles.detailsContentTitle}>
                                {detailsContent[3].title}
                            </strong>
                            <p className={styles.detailsContentParagraph}>
                                {detailsContent[3].content}
                            </p>
                        </div>
                    }
                    </div>
                </div>
                {detailsContent.map((detailContent: DetailsContent) => (
                    <details className={styles.mobileDetails} key={detailContent.key}>
                        <summary className={styles.mobileSummary}>
                            {detailContent.title}
                        </summary>
                        <p className={styles.mobileDetailsContent}>
                            {detailContent.content}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}

export default Investor;
