import { PossibleChoices } from './FormikWizard.types';

export interface State
{
    canStep: boolean;
    stepNumber: number;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string;
}

export interface PostResponseData
{
    Message: string;
}

export interface HubspotHeader
{
    Key: string;
    Value: string[];
}

export interface HubspotRequestMessage
{
    Content: {
        Headers: HubspotHeader[];
    };
    Headers: HubspotHeader[];
    Method: { Method: string };
    Properties: any;
    RequestUri: string;
    Version: HubspotVersion;
}

export interface HubspotVersion
{
    Build: number;
    Major: number;
    MajorRevision: number;
    Minor: number;
    MinorRevision: number;
    Revision: number;
}

export interface HubspotResponseJSON
{
    Content: {
        Headers: HubspotHeader[];
    };
    Headers: HubspotHeader[];
    IsSuccessStatusCode: boolean;
    ReasonPhrase: string;
    RequestMessage: HubspotRequestMessage;
    RequestUri: string;
    StatusCode: number;
    TrailingHeaders: HubspotHeader[];
    Version: HubspotVersion;
}

export interface InjectedField
{
    field: () => JSX.Element | undefined;
}

export interface Choices
{
    purchaseOrRefinance: PossibleChoices;
    propertyUse: PossibleChoices;
    propertyType: PossibleChoices;
    creditScore: PossibleChoices;
}

export interface FormikValues
{
    purchaseOrRefinance: null | Choices['purchaseOrRefinance'];
    propertyUse: null | Choices['propertyUse'];
    propertyType: null | Choices['propertyType'];
    credit: null | Choices['creditScore'];
    borrowAmount: null | number;
    loanAmount: null | number;
    propertyValue: null | number;
    propertyCity: null | string;
    firstName: null | string;
    lastName: null | string;
    email: null | string;
    phone: null | string;
}

export interface Field
{
    key: string;
    Element: JSX.Element;
}

export interface Choice
{
    key: number;
    image?: string;
    text: string;
}

export interface FirstChoice extends Choice
{
    value: FormikValues['purchaseOrRefinance'];
}

export interface SecondChoice extends Choice
{
    value: FormikValues['propertyUse'];
}

export interface ThirdChoice extends Choice
{
    value: FormikValues['propertyType'];
}

export interface FourthChoice extends Choice
{
    value: FormikValues['credit'];
}

export interface StepChoiceProps
{
    key: number;
    onClick: () => void;
    state: FormikValues;
}

export interface StepOneChoiceProps extends StepChoiceProps
{
    value: FirstChoice['value'];
}

export interface StepTwoChoiceProps extends StepChoiceProps
{
    value: SecondChoice['value'];
}

export interface StepThreeChoiceProps extends StepChoiceProps
{
    value: ThirdChoice['value'];
}

export interface StepFourChoiceProps extends StepChoiceProps
{
    value: FourthChoice['value'];
}

export interface ChoiceMarkFillerProps
{
    state: FormikValues;
}

export interface ChoiceOneMarkFillerProps extends ChoiceMarkFillerProps
{
    value: FirstChoice['value'];
}

export interface ChoiceTwoMarkFillerProps extends ChoiceMarkFillerProps
{
    value: SecondChoice['value'];
}

export interface ChoiceThreeMarkFillerProps extends ChoiceMarkFillerProps
{
    value: ThirdChoice['value'];
}

export interface ChoiceFourMarkFillerProps extends ChoiceMarkFillerProps
{
    value: FourthChoice['value'];
}
