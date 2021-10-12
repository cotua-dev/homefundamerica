import React from 'react';
import { useFormik } from 'formik';
import { render, RenderResult } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import { default as FormikActionButtons } from '..';
import { Props } from '../FormikActionButtons.interfaces';
import { FormikValues } from '../../FormikWizard/FormikWizard.interfaces';

describe('FormikActionButtons component', (): void => {
    test('renders', (): void => {
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
        const { result } = renderHook(() => useFormik<FormikValues>({
            initialValues,
            onSubmit: () => {},
        }));

        act(() => {
            const props: Props = {
                canStep: false,
                stepNumber: 0,
                totalSteps: 0,
                formikProps: result.current,
                onNext: () => {},
                onPrevious: () => {},
            };

            const { container }: RenderResult = render(<FormikActionButtons {...props}/>);

            expect(container.firstChild).toMatchSnapshot();
        });
    });
});
