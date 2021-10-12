import React, {
    FunctionComponent,
    ReactElement,
    useContext,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Props } from './FormikActionButtons.interfaces';
import * as styles from './FormikActionButtons.module.scss';
import { FormikValues } from '../FormikWizard/FormikWizard.interfaces';
import {
    Interface,
    InterfaceType,
} from '../../contexts';

const FormikActionButtons: FunctionComponent<Props> = (props: Props): ReactElement =>
{
    const { isLoading } = useContext<InterfaceType>(Interface);

    /**
     * Check to see if formik field has a value
     * 
     * @param field Formik field name
     * @returns Boolean depending on presence of formik field value
     */
    const checkFormikValue = (field: keyof FormikValues): boolean =>
    {
        return props.formikProps.values[field] === null ? false : true;
    }

    /**
     * Check the borrow amount field value is
     * greater than or equal to 100000
     */
    // const checkBorrowAmount = (): boolean => Number(props.formikProps.values.borrowAmount) >= 100000 ? true : false;

    /**
     * Check if the property value field is
     * greater than or equal to 100000
     */
    // const checkLoanAmount = (): boolean => Number(props.formikProps.values.loanAmount) >= 100000 ? true : false;

    /**
     * Check purchaseOrRefinance field to update switch statement
     * 
     * @returns Result of check as boolean, null, or undefined values
     */
    const checkPurchaseOrRefinanceValue = (): boolean | null | undefined =>
    {
        const { purchaseOrRefinance } = props.formikProps.values;

        if (purchaseOrRefinance === null)
        {
            return null;
        } else {
            if (purchaseOrRefinance === 'Purchase')
            {
                return true;
            }

            if (purchaseOrRefinance === 'Refinance')
            {
                return false;
            }
        }
    }

    /**
     * Check to see if the next step is allowed
     * 
     * @returns Boolean depending on allowance
     */
    const allowNextStep = (): boolean =>
    {
        let allowance = false;
        const purchaseOrRefinance = checkPurchaseOrRefinanceValue();

        switch (props.stepNumber)
        {
            case 1:
                allowance = checkFormikValue('purchaseOrRefinance')
                break;
            case 2:
                allowance = checkFormikValue('propertyUse');
                break;
            case 3:
                allowance = checkFormikValue('propertyType');
                break
            case 4:
                allowance = checkFormikValue('credit');
                break;
        }

        if (typeof purchaseOrRefinance === 'boolean')
        {
            if (purchaseOrRefinance)
            {
                switch (props.stepNumber)
                {
                    case 5:
                        // allowance = checkBorrowAmount();
                        allowance = checkFormikValue('borrowAmount');
                        break;
                    case 6:
                        allowance = checkFormikValue('propertyCity');
                        break;
                    case 7:
                        allowance = checkFormikValue('firstName') && checkFormikValue('lastName');
                        break;
                    case 8:
                        allowance = checkFormikValue('email');
                        break;
                    case 9:
                        allowance = checkFormikValue('phone');
                        break;
                }
            } else
            {
                switch (props.stepNumber)
                {
                    case 5:
                        // allowance = checkLoanAmount();
                        allowance = checkFormikValue('loanAmount');
                        break;
                    case 6:
                        allowance = checkFormikValue('propertyValue');
                        break;
                    case 7:
                        allowance = checkFormikValue('propertyCity');
                        break;
                    case 8:
                        allowance = checkFormikValue('firstName') && checkFormikValue('lastName');
                        break;
                    case 9:
                        allowance = checkFormikValue('email');
                        break;
                    case 10:
                        allowance = checkFormikValue('phone');
                        break;
                }
            }
        }

        return allowance;
    }

    return (
        <div className={styles.actionButtonsWrapper}>
            {props.stepNumber > 1 &&
                <button
                    className={styles.actionButton}
                    type="button"
                    onClick={(): void => props.onPrevious()}
                >{`Previous`}</button>
            }
            {props.stepNumber !== props.totalSteps ?
                <button
                    className={styles.actionButton}
                    type="button"
                    onClick={(): void => props.onNext()}
                    disabled={!allowNextStep()}
                >{`Next`}</button> :
                <button
                    className={styles.actionButton}
                    type="button"
                    onClick={(): Promise<void> => props.formikProps.submitForm()}
                    disabled={!allowNextStep()}
                >
                    {!isLoading ? 'Submit' :
                        <FontAwesomeIcon
                            className={styles.loadingSpinner}
                            icon={faSpinner}
                            pulse
                        />
                    }
                </button>
            }
        </div>
    );
}

export default FormikActionButtons;
