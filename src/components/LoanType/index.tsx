import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { Props } from './LoanType.interfaces';
import * as styles from './LoanType.module.scss';
import * as sharedStyles from '../sharedStyles/shared.module.scss';

export const LoanType: FunctionComponent<Props> = (props: Props): ReactElement<Props> => {
    return (
        <section id={styles.loanTypeSection} className={sharedStyles.loanPositive}>
            <div className={sharedStyles.contentWrapper}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <p>
                    {props.learnMore}
                    <a href="tel:8888186393">888-818-6393</a>
                </p>
            </div>
        </section>
    );
}
