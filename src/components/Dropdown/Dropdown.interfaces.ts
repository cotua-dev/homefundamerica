export interface Props
{
    links: LinkType[];
    title: string;
}

export interface State
{
    toggleDropdown: boolean;
}

export interface LinkType
{
    key: number;
    url: string;
    title: string;
}
