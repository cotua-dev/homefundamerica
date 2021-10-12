import { createContext, Context } from 'react';
import { InterfaceType } from './Interface.interfaces';

export const defaultInterfaceContext: InterfaceType = {
    isLoading: false,
    isNavOpen: false,
    toggleLoading: (isLoading: boolean): void => {
        // do nothing
    },
    toggleNav: (isNavOpen: boolean): void => {
        // do nothing
    },
};

export const Interface: Context<InterfaceType> = createContext(defaultInterfaceContext);
