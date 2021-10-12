import { LinkType } from "../Dropdown/Dropdown.interfaces";

export const residentialLinks: LinkType[] = [
    {
        key: 0,
        title: 'FHA',
        url: '/fha',
    },
    {
        key: 1,
        title: 'Conventional',
        url: '/conventional',
    },
    {
        key: 2,
        title: 'Non-Conventional',
        url: '/non-conventional',
    },
    {
        key: 3,
        title: 'VA',
        url: '/va',
    },
    {
        key: 4,
        title: 'Jumbo/Super Jumbo',
        url: '/jumbo',
    },
    {
        key: 5,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        key: 6,
        title: 'Interest-Only',
        url: '/interest-only',
    },
];

export const commercialLinks: LinkType[] = [
    {
        key: 7,
        title: 'Commercial',
        url: '/commercial',
    },
    {
        key: 8,
        title: 'Commercial Cannabis',
        url: '/commercial-cannabis',
    },
];

export const primaryResidenceLinks: LinkType[] = [
    {
        key: 9,
        title: 'True Stated Income',
        url: '/true-stated-income',
    },
    {
        key: 10,
        title: 'Stated Income',
        url: '/stated-income',
    },
];

export const investorsLinks: LinkType[] = [
    {
        key: 11,
        title: 'Investor No Doc',
        url: '/investor-no-doc',
    },
    {
        key: 12,
        title: 'Investor DSCR',
        url: '/investor-dscr',
    },
    {
        key: 13,
        title: 'Investor Bank Statements',
        url: '/investor-bank-statements',
    },
    {
        key: 14,
        title: 'Foreign National',
        url: '/foreign-national',
    },
];
