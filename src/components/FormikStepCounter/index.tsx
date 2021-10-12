import React, { FunctionComponent } from 'react';
import { Props } from './FormikStepCounter.interfaces';
import * as styles from './FormikStepCounter.module.scss';

const FormikStepCounter: FunctionComponent<Props> = (props: Props) =>
{
    return (
        <div className={styles.stepCounterWrapper}>
            {props.stepNumber} of {props.totalSteps}
        </div>
    );
}

export default FormikStepCounter;
