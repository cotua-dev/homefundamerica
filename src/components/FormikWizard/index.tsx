import React, {
    FunctionComponent,
    ReactElement,
    SetStateAction,
    useState,
    useContext,
    ChangeEvent,
} from 'react';
import { Link } from 'gatsby';
import {
    Formik,
    FormikProps,
    Form,
    Field,
    FormikHelpers,
} from 'formik';
import {
    AnimatePresence,
    motion,
} from 'framer-motion';
import {
    FormikValues,
    InjectedField,
    State,
    FirstChoice,
    SecondChoice,
    ThirdChoice,
    FourthChoice,
    PostResponseData,
    HubspotResponseJSON,
} from './FormikWizard.interfaces';
import * as styles from './FormikWizard.module.scss';
import {
    FormikActionButtons,
    FormikStepCounter,
} from '../'
import {
    firstStepChoices,
    secondStepChoices,
    thirdStepChoices,
    fourthStepChoices,
} from './Choices';
import {
    Interface,
    InterfaceType,
} from '../../contexts';
import { PossibleChoices } from './FormikWizard.types';

const FormikWizard: FunctionComponent = (): ReactElement =>
{
    const initialValues: FormikValues = {
        purchaseOrRefinance: null,
        propertyUse: null,
        propertyType: null,
        credit: null,
        borrowAmount: null,
        loanAmount: null,
        propertyValue: null,
        propertyCity: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
    };
    const initialState: State = {
        canStep: false,
        stepNumber: 1,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    };
    const [state, setState] = useState<State>(initialState);
    const { toggleLoading } = useContext<InterfaceType>(Interface);

    /**
     * Check existence of string
     * 
     * @param value String to check
     * @returns Value itself or empty string
     */
    const checkString = (value: string | null): string => value ? value : '';

    /**
     * Check existence of number
     * 
     * @param value Number to check
     * @returns Value itself or empty string
     */
    const checkNumber = (value: number | string | null): string | number => value ? Number(value) : '';

    /**
     * onPrevious's state action function
     * 
     * @param previousState State prior to update
     * @returns Updated state
     */
    const onPreviousAction: SetStateAction<State> = (previousState: State): State =>
    ({
        ...previousState,
        stepNumber: (previousState.stepNumber > 1)
            ? --previousState.stepNumber
            : previousState.stepNumber,
    });

    /**
     * Decrement a step
     * 
     * @returns void
     */
    const onPrevious = (): void => setState(onPreviousAction);

    /**
     * Set the canStep property
     * 
     * @param canStep Boolean allowing the next step to be taken
     * @returns void
     */
    const toggleCanStep = (canStep: boolean): void =>
    setState((state: State): State =>
        ({
            ...state,
            canStep,
        })
    );

    /**
     * Set the isSuccess property in state
     * 
     * @param isSuccess Boolean used to show form or thank you content
     * @returns void
     */
    const toggleIsSuccess = (isSuccess: boolean): void =>
    setState((state: State): State =>
        ({
            ...state,
            isSuccess,
        })
    );

    /**
     * Set the isError property in state
     * 
     * @param isError Boolean used to show an error message
     * @returns void
     */
    const toggleIsError = (isError: boolean): void =>
    setState((state: State): State =>
        ({
            ...state,
            isError,
        })
    );

    /**
     * Set the errorMessage property in state
     * 
     * @param errorMessage String used to show an error has occurred
     * @returns void
     */
    const setErrorMessage = (errorMessage: string): void =>
    setState((state: State): State =>
        ({
            ...state,
            errorMessage,
        })
    );

    /**
     * Reset state to initial values
     */
    const resetState = (): void => {
        setState(initialState);
        toggleIsError(false);
        setErrorMessage('');
    }

    /**
     * Formik submit event method to POST data to Bitrix
     * 
     * @param values Formik values
     * @param resetForm Formik method to reset the form
     */
    const onSubmit = async (values: FormikValues, resetForm: Function): Promise<void> =>
    {
        // Show loading spinner
        toggleLoading(true);

        try {
            // Launch Bitrix POST request
            const response = await fetch(`${process.env.API_URL}/Bitrix`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    borrowAmount: values.borrowAmount,
                    creditScore: values.credit,
                    email: checkString(values.email),
                    firstName: checkString(values.firstName),
                    lastName: checkString(values.lastName),
                    loanAmount: values.loanAmount,
                    phone: checkString(values.phone),
                    propertyCity: checkString(values.propertyCity),
                    propertyType: values.propertyType,
                    propertyUse: values.propertyUse,
                    propertyValue: values.propertyValue,
                    purchaseOrRefinance: values.purchaseOrRefinance,
                }),
            });

            // Check if the response was successful and update UI accordingly
            response.status === 200 ? toggleIsSuccess(true) : toggleIsSuccess(false);

            // If 400 (Bad request) is the status code...
            if (response.status === 400) {
                // Get Hubspot's response message object
                const data: PostResponseData = await response.json();
                const responseMessageJSON: HubspotResponseJSON = JSON.parse(data.Message);

                // Check Hubspot's response message object status code and update UI accordingly
                if (responseMessageJSON.StatusCode === 409) {
                    setErrorMessage('This contact already exists');
                    toggleIsError(true);
                }
            }

            // Remove loading spinner and reset the form
            toggleLoading(false);
            resetForm();
        } catch(err) {
            console.error({ onSubmitError: err });
        }
    }

    return (
        <section className={styles.formikSection}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: FormikValues, { resetForm }: FormikHelpers<FormikValues>): Promise<void> => onSubmit(values, resetForm)}
            >
                {(formikProps: FormikProps<FormikValues>): ReactElement =>
                {
                    /**
                     * Set a passed choice value to a passed formik field
                     * 
                     * @param field Formik field
                     * @param value Value to set to passed formik field
                     * @returns void
                     */
                    const setChoice = (field: keyof FormikValues, value: PossibleChoices | null): void =>
                    {
                        // Set the value
                        formikProps.setFieldValue(field, value);

                        // Make the next step accessible
                        toggleCanStep(true);

                        // Immediately go to the next step
                        onNext();
                    }

                    /**
                     * Check to see if formik value matches passed value
                     * 
                     * @param field Formik field
                     * @param value Chosen value
                     * @returns Boolean indicating if value was chosen
                     */
                    const isChosen = (field: keyof FormikValues, value: PossibleChoices | null): boolean => formikProps.values[field] === value;

                    /**
                     * Set a formik field's value
                     * 
                     * @param event React synthetic change event to input element
                     * @param field Name of formik field to update
                     */
                    const setField = (event: ChangeEvent<HTMLInputElement>, field: keyof FormikValues): void => formikProps.setFieldValue(field, event.target.value);

                    /**
                     * Array of fields with choices
                     */
                    const choiceFields: InjectedField[] = [
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 1)
                                {
                                    return (
                                        <Field name="purchaseOrRefinance" key="purchase-or-refinance">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={1}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>What are you looking to do?</h3>
                                                        <div className={styles.choices}>
                                                            {
                                                                firstStepChoices.map((choice: FirstChoice): ReactElement =>
                                                                (
                                                                    <div
                                                                        className={styles.stepChoice}
                                                                        key={choice.key}
                                                                        onClick={(): void => setChoice('purchaseOrRefinance', choice.value)}
                                                                    >
                                                                        <div className={styles.choiceMark}>
                                                                            {isChosen('purchaseOrRefinance', choice.value) &&
                                                                                <div className={styles.choiceMarkFiller}/>
                                                                            }
                                                                        </div>
                                                                        <img
                                                                            className={styles.choiceImage}
                                                                            src={choice.image}
                                                                            alt={choice.text + ' image'}
                                                                        />
                                                                        <h5 className={styles.choiceTitle}>{choice.text}</h5>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 2)
                                {
                                    return (
                                        <Field name="propertyUse" key="property-use">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={2}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>What will the property be used for?</h3>
                                                        <div className={styles.choices}>
                                                            {
                                                                secondStepChoices.map((choice: SecondChoice): ReactElement =>
                                                                (
                                                                    <div
                                                                        className={styles.stepChoice}
                                                                        key={choice.key}
                                                                        onClick={(): void => setChoice('propertyUse', choice.value)}
                                                                    >
                                                                        <div className={styles.choiceMark}>
                                                                            {isChosen('propertyUse', choice.value) &&
                                                                                <div className={styles.choiceMarkFiller}/>
                                                                            }
                                                                        </div>
                                                                        <img
                                                                            className={styles.choiceImage}
                                                                            src={choice.image}
                                                                            alt={choice.text + ' image'}
                                                                        />
                                                                        <h5 className={styles.choiceTitle}>{choice.text}</h5>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 3)
                                {
                                    return (
                                        <Field name="propertyType" key="property-type">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={3}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>What type of property is it?</h3>
                                                        <div className={styles.choices}>
                                                            {
                                                                thirdStepChoices.map((choice: ThirdChoice): ReactElement =>
                                                                (
                                                                    <div
                                                                        className={styles.stepChoice}
                                                                        key={choice.key}
                                                                        onClick={(): void => setChoice('propertyType', choice.value)}
                                                                    >
                                                                        <div className={styles.choiceMark}>
                                                                            {isChosen('propertyType', choice.value) &&
                                                                                <div className={styles.choiceMarkFiller}/>
                                                                            }
                                                                        </div>
                                                                        <img
                                                                            className={styles.choiceImage}
                                                                            src={choice.image}
                                                                            alt={choice.text + ' image'}
                                                                        />
                                                                        <h5 className={styles.choiceTitle}>{choice.text}</h5>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 4)
                                {
                                    return (
                                        <Field name="credit" key="credit">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={4}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>What is your credit like?</h3>
                                                        <div className={styles.choices}>
                                                            {
                                                                fourthStepChoices.map((choice: FourthChoice): ReactElement =>
                                                                (
                                                                    <div
                                                                        className={styles.stepChoice}
                                                                        key={choice.key}
                                                                        onClick={(): void => setChoice('credit', choice.value)}
                                                                    >
                                                                        <div className={styles.choiceMark}>
                                                                            {isChosen('credit', choice.value) &&
                                                                                <div className={styles.choiceMarkFiller}/>
                                                                            }
                                                                        </div>
                                                                        <img
                                                                            className={styles.choiceImage}
                                                                            src={choice.image}
                                                                            alt={choice.text + ' image'}
                                                                        />
                                                                        <h5 className={styles.choiceTitle}>{choice.text}</h5>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                    ];

                    /**
                     * Array of fields if purchaseOrRefinance is "Purchase"
                     */
                    const purchaseFields: InjectedField[] = [
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 5)
                                {
                                    return (
                                        <Field name="borrowAmount" key="borrow-amount">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={5}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            How much are you looking to borrow?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="number"
                                                            min="0"
                                                            value={checkNumber(formikProps.values.borrowAmount)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'borrowAmount')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 6)
                                {
                                    return (
                                        <Field name="propertyCity" key="property-city">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={6}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What city is the property in?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="text"
                                                            value={checkString(formikProps.values.propertyCity)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'propertyCity')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 7)
                                {
                                    return (
                                        <motion.div
                                            key={7}
                                            className={styles.namesWrapper}
                                            initial={{ opacity: 0, display: 'none' }}
                                            animate={{ opacity: 1, display: 'flex' }}
                                            exit={{ opacity: 0, display: 'none' }}
                                            transition={{ ease: 'easeInOut', duration: 0.3 }}
                                        >
                                            <Field name="firstName">
                                                {
                                                    (): ReactElement =>
                                                    (
                                                        <div className={styles.step}>
                                                            <h3 className={styles.stepTitle}>
                                                                First Name
                                                            </h3>
                                                            <input
                                                                className={styles.field}
                                                                type="text"
                                                                value={checkString(formikProps.values.firstName)}
                                                                onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'firstName')}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </Field>
                                            <Field name="lastName">
                                                {
                                                    (): ReactElement =>
                                                    (
                                                        <div className={styles.step}>
                                                            <h3 className={styles.stepTitle}>
                                                                Last Name
                                                            </h3>
                                                            <input
                                                                className={styles.field}
                                                                type="text"
                                                                value={checkString(formikProps.values.lastName)}
                                                                onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'lastName')}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </Field>
                                        </motion.div>
                                    );
                                }
                            },
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 8)
                                {
                                    return (
                                        <Field name="email" key="email">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={8}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What is your email?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="email"
                                                            value={checkString(formikProps.values.email)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'email')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 9)
                                {
                                    return (
                                        <Field name="phone" key="phone">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={9}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What number can we reach you at?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="tel"
                                                            value={checkString(formikProps.values.phone)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'phone')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            },
                        },
                    ];

                    /**
                     * Array of fields if purchaseOrRefinance is "Refinance"
                     */
                    const refinanceFields: InjectedField[] = [
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 5)
                                {
                                    return (
                                        <Field name="loanAmount" key="loan-amount">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={5}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What is your loan amount?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="number"
                                                            min="0"
                                                            value={checkNumber(formikProps.values.loanAmount)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'loanAmount')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            }
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 6)
                                {
                                    return (
                                        <Field name="propertyValue" key="property-value">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={6}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What is the current property value?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="number"
                                                            min="0"
                                                            value={checkNumber(formikProps.values.propertyValue)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'propertyValue')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            }
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 7)
                                {
                                    return (
                                        <Field name="propertyCity" key="property-city">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={7}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What city is the property in?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="text"
                                                            value={checkString(formikProps.values.propertyCity)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'propertyCity')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            }
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 8)
                                {
                                    return (
                                        <motion.div
                                            key={8}
                                            initial={{ opacity: 0, display: 'none' }}
                                            animate={{ opacity: 1, display: 'flex' }}
                                            exit={{ opacity: 0, display: 'none' }}
                                            transition={{ ease: 'easeInOut', duration: 0.3 }}
                                        >
                                            <Field name="firstName">
                                                {
                                                    (): ReactElement =>
                                                    (
                                                        <div className={styles.step}>
                                                            <h3 className={styles.stepTitle}>
                                                                First Name
                                                            </h3>
                                                            <input
                                                                className={styles.field}
                                                                type="text"
                                                                value={checkString(formikProps.values.firstName)}
                                                                onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'firstName')}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </Field>
                                            <Field name="lastName">
                                                {
                                                    (): ReactElement =>
                                                    (
                                                        <div className={styles.step}>
                                                            <h3 className={styles.stepTitle}>
                                                                Last Name
                                                            </h3>
                                                            <input
                                                                className={styles.field}
                                                                type="text"
                                                                value={checkString(formikProps.values.lastName)}
                                                                onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'lastName')}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </Field>
                                        </motion.div>
                                    );
                                }
                            }
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 9)
                                {
                                    return (
                                        <Field name="email" key="email">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={9}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What is your email?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="email"
                                                            value={checkString(formikProps.values.email)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'email')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            }
                        },
                        {
                            field(): ReactElement | undefined {
                                if (state.stepNumber === 10)
                                {
                                    return (
                                        <Field name="phone" key="phone">
                                            {
                                                (): ReactElement =>
                                                (
                                                    <motion.div
                                                        key={10}
                                                        className={styles.step}
                                                        initial={{ opacity: 0, display: 'none' }}
                                                        animate={{ opacity: 1, display: 'flex' }}
                                                        exit={{ opacity: 0, display: 'none' }}
                                                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                                                    >
                                                        <h3 className={styles.stepTitle}>
                                                            What number can we reach you at?
                                                        </h3>
                                                        <input
                                                            className={styles.field}
                                                            type="tel"
                                                            value={checkString(formikProps.values.phone)}
                                                            onChange={(event: ChangeEvent<HTMLInputElement>): void => setField(event, 'phone')}
                                                        />
                                                    </motion.div>
                                                )
                                            }
                                        </Field>
                                    );
                                }
                            }
                        },
                    ];

                    /**
                     * Based on purchaseOrRefinance field, calculate total number of steps
                     * 
                     * @returns Number of total steps
                     */
                    const calculateTotalSteps = (): number =>
                    {
                        // Get number of total choice fields
                        let totalSteps: number = choiceFields.length;

                        // Check which fields to add to total
                        if (formikProps.values.purchaseOrRefinance === 0)
                        {
                            // Add number of purchase fields to total
                            totalSteps = totalSteps + purchaseFields.length;
                        } else if (formikProps.values.purchaseOrRefinance === 1)
                        {
                            // Add number of refinance fields to total
                            totalSteps = totalSteps + refinanceFields.length;
                        }

                        return totalSteps;
                    }

                    /**
                     * onNext's state action function
                     * 
                     * @param previousState State prior to update
                     * @returns Updated state
                     */
                    const onNextAction: SetStateAction<State> = (previousState: State): State =>
                    ({
                        ...previousState,
                        stepNumber: (previousState.canStep && (previousState.stepNumber < calculateTotalSteps()))
                            ? ++previousState.stepNumber
                            : previousState.stepNumber,
                    });

                    /**
                     * Increment a step
                     * 
                     * @returns void
                     */
                    const onNext = (): void => setState(onNextAction);

                    return (
                        <>
                            {!state.isSuccess && !state.isError &&
                                <>
                                    {state.stepNumber > 1 &&
                                        <FormikStepCounter
                                            stepNumber={state.stepNumber}
                                            totalSteps={calculateTotalSteps()}
                                        />
                                    }
                                    <Form>
                                        <AnimatePresence initial={false} custom={state.stepNumber}>
                                            {choiceFields.map((field: InjectedField): ReactElement | undefined => field.field())}
                                            {formikProps.values.purchaseOrRefinance === 0 && purchaseFields.map((field: InjectedField): ReactElement | undefined => field.field())}
                                            {formikProps.values.purchaseOrRefinance === 1 && refinanceFields.map((field: InjectedField): ReactElement | undefined => field.field())}
                                        </AnimatePresence>
                                    </Form>
                                    <FormikActionButtons
                                        canStep={state.canStep}
                                        stepNumber={state.stepNumber}
                                        totalSteps={calculateTotalSteps()}
                                        onNext={onNext}
                                        onPrevious={onPrevious}
                                        formikProps={formikProps}
                                    />
                                </>
                            }
                            {state.isSuccess &&
                                <div className={styles.thankYouWrapper}>
                                    <strong className={styles.thanksTitle}>{`
                                        Thank you for completing our questionnaire. A licensed
                                        loan officer will reach out to you shortly to continue
                                        the process. We look forward to working with you. Thanks
                                        again!
                                    `}</strong>
                                    <Link className={styles.homePageLink} to="/">{`Home Page`}</Link>
                                </div>
                            }
                            {state.isError &&
                                <div className={styles.errorMessageWrapper}>
                                    <strong className={styles.errorMessage}>
                                        {state.errorMessage}
                                    </strong>
                                    <button
                                        className={styles.resetButton}
                                        type="button"
                                        onClick={resetState}
                                    >
                                        {`Click here to try again`}
                                    </button>
                                </div>
                            }
                        </>
                    );
                }}
            </Formik>
        </section>
    );
}

export default FormikWizard;
