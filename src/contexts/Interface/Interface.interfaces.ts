export interface InterfaceType
{
    isLoading: boolean;
    isNavOpen: boolean;
    toggleLoading: (isLoading: boolean) => void;
    toggleNav: (isNavOpen: boolean) => void;
}
