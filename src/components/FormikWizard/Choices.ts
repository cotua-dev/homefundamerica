import {
    FirstChoice,
    SecondChoice,
    ThirdChoice,
    FourthChoice,
} from './FormikWizard.interfaces';

export const firstStepChoices: FirstChoice[] = [
    {
        key: 0,
        text: 'Purchase',
        value: 0,
        image: '/purchase.svg',
    },
    {
        key: 1,
        text: 'Refinance',
        value: 1,
        image: '/refinance.svg',
    },
];

export const secondStepChoices: SecondChoice[] = [
    {
        key: 2,
        text: 'Primary',
        value: 0,
        image: '/primary.svg',
    },
    {
        key: 3,
        text: 'Vacation',
        value: 1,
        image: '/vacation.svg',
    },
    {
        key: 4,
        text: 'Investment',
        value: 2,
        image: '/investment.svg',
    },
];

export const thirdStepChoices: ThirdChoice[] = [
    {
        key: 5,
        text: 'Single Family',
        value: 0,
        image: '/single-family.svg',
    },
    {
        key: 6,
        text: 'Condo',
        value: 1,
        image: '/condo.svg',
    },
    {
        key: 7,
        text: 'Multi-Family',
        value: 2,
        image: '/multi-family.svg',
    },
    {
        key: 8,
        text: 'Townhouse',
        value: 3,
        image: '/townhouse.svg',
    },
];

export const fourthStepChoices: FourthChoice[] = [
    {
        key: 9,
        text: 'Low (619 or less)',
        value: 0,
        image: '/1-star.svg',
    },
    {
        key: 10,
        text: 'Fair (620 - 679)',
        value: 1,
        image: '/2-stars.svg',
    },
    {
        key: 11,
        text: 'Good (680 - 739)',
        value: 2,
        image: '/3-stars.svg',
    },
    {
        key: 12,
        text: 'Excellent (740+)',
        value: 3,
        image: '/4-stars.svg',
    },
];
