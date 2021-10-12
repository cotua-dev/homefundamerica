import {
    FirstChoice,
    SecondChoice,
    ThirdChoice,
    FourthChoice,
} from "./FormikWizard.interfaces";

export const firstStepChoices: FirstChoice[] = [
    {
        key: 0,
        value: 'Purchase',
        image: '/purchase.svg',
    },
    {
        key: 1,
        value: 'Refinance',
        image: '/refinance.svg',
    },
];

export const secondStepChoices: SecondChoice[] = [
    {
        key: 2,
        value: 'Primary',
        image: '/primary.svg',
    },
    {
        key: 3,
        value: 'Vacation',
        image: '/vacation.svg',
    },
    {
        key: 4,
        value: 'Investment',
        image: '/investment.svg',
    },
];

export const thirdStepChoices: ThirdChoice[] = [
    {
        key: 5,
        value: 'Single Family',
        image: '/single-family.svg',
    },
    {
        key: 6,
        value: 'Condo',
        image: '/condo.svg',
    },
    {
        key: 7,
        value: 'Multi-Family',
        image: '/multi-family.svg',
    },
    {
        key: 8,
        value: 'Townhouse',
        image: '/townhouse.svg',
    },
];

export const fourthStepChoices: FourthChoice[] = [
    {
        key: 9,
        value: 'Low (619 or less)',
        image: '/1-star.svg',
    },
    {
        key: 10,
        value: 'Fair (620 - 679)',
        image: '/2-stars.svg',
    },
    {
        key: 11,
        value: 'Good (680 - 739)',
        image: '/3-stars.svg',
    },
    {
        key: 12,
        value: 'Excellent (740+)',
        image: '/4-stars.svg',
    },
];
