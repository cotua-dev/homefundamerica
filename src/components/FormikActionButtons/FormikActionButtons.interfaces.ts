import { FormikProps } from "formik";
import { FormikValues } from "../FormikWizard/FormikWizard.interfaces";

export interface Props
{
    canStep: boolean;
    stepNumber: number;
    totalSteps: number;
    formikProps: FormikProps<FormikValues>;
    onNext: () => void;
    onPrevious: () => void;
}
