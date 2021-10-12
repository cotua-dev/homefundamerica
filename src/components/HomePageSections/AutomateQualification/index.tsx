import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    StaticQuery,
    graphql,
} from 'gatsby';
import {
    Formik,
    Field,
    Form,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import {
    PointType,
    Props,
    FetchAutomateQualificationImagesQuery,
    RequestMoreInfoFormValues,
    Option,
} from './AutomateQualification.interfaces';
import * as styles from './AutomateQualification.module.scss';

const AutomateQualification: FunctionComponent = (): ReactElement =>
{
    const initialValues: RequestMoreInfoFormValues = {
        learnMore: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    }

    // Add validation using Yup (https://github.com/jquense/yup)
    const validationSchema: Yup.ObjectSchema<RequestMoreInfoFormValues> = Yup.object({
        learnMore: Yup.string().required('Required'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phoneNumber: Yup.string().required('Required'),
    });

    /**
     * Handle submission
     * 
     * @param values Submitted form values
     */
    const onSubmit = (values: RequestMoreInfoFormValues): void => {
        // Do something...
        console.log({ values });
    }

    const learnMoreOptions: Option[] = [
        { key: 0, text: 'FHA', value: 'fha' },
        { key: 1, text: 'Conventional', value: 'conventional' },
        { key: 2, text: 'VA', value: 'va' },
        { key: 3, text: 'Non-Conventional', value: 'non-conventional' },
        { key: 4, text: 'Jumbo/Super Jumbo', value: 'jumbo' },
        { key: 5, text: 'Portfolio', value: 'portfolio' },
        { key: 6, text: 'Interest-Only', value: 'interest-only' },
        { key: 7, text: 'Commercial', value: 'commercial' },
        { key: 8, text: 'Commercial Cannabis', value: 'commercial-cannabis' },
    ];

    return (
        <section className={styles.automateQualificationSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{'We Made It Fast & Easy'}</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form className={styles.requestMoreInfo}>
                        <label htmlFor="learnMore">Request More Info</label>
                        <Field name="learnMore" as="select">
                            <option value="">Select</option>
                            {learnMoreOptions.map((option: Option) => (
                                <option key={option.key} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="learnMore">
                            {(errorMessage: string) => (<small className={styles.errorWrapper}>{errorMessage}</small>)}
                        </ErrorMessage>
                        <label htmlFor="firstName">First Name</label>
                        <Field
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                        />
                        <ErrorMessage name="firstName">
                            {(errorMessage: string) => (<small className={styles.errorWrapper}>{errorMessage}</small>)}
                        </ErrorMessage>
                        <label htmlFor="lastName">Last Name</label>
                        <Field
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                        />
                        <ErrorMessage name="lastName">
                            {(errorMessage: string) => (<small className={styles.errorWrapper}>{errorMessage}</small>)}
                        </ErrorMessage>
                        <label htmlFor="email">Email</label>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Enter your e-mail here"
                        />
                        <ErrorMessage name="email">
                            {(errorMessage: string) => (<small className={styles.errorWrapper}>{errorMessage}</small>)}
                        </ErrorMessage>
                        <label htmlFor="phoneNumber">Phone</label>
                        <Field
                            name="phoneNumber"
                            type="tel"
                            placeholder="Phone"
                        />
                        <ErrorMessage name="phoneNumber">
                            {(errorMessage: string) => (<small className={styles.errorWrapper}>{errorMessage}</small>)}
                        </ErrorMessage>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </section>
    );
};

export default AutomateQualification;

/*
export const PureAutomateQualification: FunctionComponent<Props> = (props: Props): JSX.Element =>
{
    const points: PointType[] = [
        {
            key: 0,
            svg: props.data?.fingerprint.publicURL,
            title: 'Personalized Customer Experience',
            content: 'MBANC’s easy single sign-on (SSO) authentication and applications pre-filled with existing 1003 and banking information. No more filling out long 1003’s. It is as easy as pushing a button'
        },
        {
            key: 1,
            svg: props.data?.city.publicURL,
            title: 'Direct Depository Pull',
            content: 'MBANC provides you with the peace of mind. Pull bank, loan and investment account transaction data. With complete account history and statement aggregation'
        },
        {
            key: 2,
            svg: props.data?.automation.publicURL,
            title: 'Complete Automation',
            content: 'An applicant can price, register, and disclose by themself. We make it fast and easy for you'
        },
        {
            key: 3,
            svg: props.data?.chip.publicURL,
            title: 'Intelligent Data Connectivity',
            content: 'Get real-time assistance at any point during the application process. No matter where the applicant may be, helpful guidance is available'
        },
        {
            key: 4,
            svg: props.data?.eye.publicURL,
            title: 'Complete Visibility',
            content: 'Get visibility into loan status and outstanding tasks. Applicants can complete conditions by connecting financial accounts, mobile document upload, and e-sign tools'
        },
        {
            key: 5,
            svg: props.data?.reduce.publicURL,
            title: 'Reduce Manual Downstream Work',
            content: 'Analyze borrower data and documents to automatically detect issues and surface them at the time of application, reducing the number of processing and underwriting touches needed'
        },
    ];

    return (
        <section className={styles.automateQualificationSection}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>
                    We Made It Fast & Easy
                </h1>
                <h4 className={styles.subtitle}>
                    Automated Qualification Process
                </h4>
                <div className={styles.pointsWrapper}>
                    {points.map((point: PointType): JSX.Element => (
                        <div className={styles.point} key={point.key}>
                            <img
                                className={styles.pointSVGImage}
                                src={point.svg}
                                alt={point.title + ' image'}
                            />
                            <h5 className={styles.pointTitle}>
                                {point.title}
                            </h5>
                            <div className={styles.pointDescriptionWrapper}>
                                <h5 className={styles.pointDescriptionTitle}>
                                    {point.title}
                                </h5>
                                {point.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AutomateQualification: FunctionComponent<Props> = (props: Props): JSX.Element =>
(
    <StaticQuery
        query={graphql`
            query FetchAutomateQualificationImages {
                fingerprint: file(relativePath: {eq: "automateQualificationSVGs/fingerPrint.svg"}) {
                    publicURL
                }
                city: file(relativePath: {eq: "automateQualificationSVGs/city.svg"}) {
                    publicURL
                }
                automation: file(relativePath: {eq: "automateQualificationSVGs/automation.svg"}) {
                    publicURL
                }
                chip: file(relativePath: {eq: "automateQualificationSVGs/chip.svg"}) {
                    publicURL
                }
                eye: file(relativePath: {eq: "automateQualificationSVGs/eye.svg"}) {
                    publicURL
                }
                reduce: file(relativePath: {eq: "automateQualificationSVGs/reduce.svg"}) {
                    publicURL
                }
            }
        `}
        render={(data: FetchAutomateQualificationImagesQuery): JSX.Element => <PureAutomateQualification {...props} data={data}/>}
    />
);

export default AutomateQualification;
*/
