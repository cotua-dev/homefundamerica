export interface Props
{
    data?: FetchAutomateQualificationImagesQuery;
}

export interface ImageQuery
{
    publicURL: string;
}

export interface PointType
{
    key: number;
    svg?: string;
    title: string;
    content: string;
}

export interface FetchAutomateQualificationImagesQuery
{
    fingerprint: ImageQuery;
    city: ImageQuery;
    automation: ImageQuery;
    chip: ImageQuery;
    eye: ImageQuery;
    reduce: ImageQuery;
}

export interface RequestMoreInfoFormValues {
    learnMore: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export interface Option {
    key: number;
    text: string;
    value: string;
}
