import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { moveToStepper } from '../../utils/moveToStepper';
import { readyGetStartedSection } from './ReadyGetStarted.module.scss';
import * as sharedStyles from '../sharedStyles/shared.module.scss';

export const ReadyGetStarted: FunctionComponent = (): ReactElement => {
    return (
        <section id={readyGetStartedSection} className={sharedStyles.loanPositive}>
            <div className={sharedStyles.contentWrapper}>
                <h2>{`Ready To Get Started?`}</h2>
                <p>
                    {`
                        It's easy to apply, just answer some basic question
                        about your personal finances and the home.
                    `}
                </p>
                <button
                    className={sharedStyles.applyButton}
                    type="button"
                    onClick={moveToStepper}
                >Apply Now</button>
            </div>
        </section>
    );
}
