import React, { useState } from 'react';
import {
    Props,
    State,
} from './MainLayout.interfaces';
import {
    Interface,
    defaultInterfaceContext,
} from '../../contexts';
import {
    CustomNavbar,
    MobileNav,
    Footer,
} from '../../components';

const MainLayout = (props: Props): JSX.Element =>
{
    const [state, setState] = useState<State>({
        interface: {
            ...defaultInterfaceContext,
            /**
             * Set the isLoading property in the Interface context
             * 
             * @param isLoading Boolean representing the current state of
             * isLoading property in the Interface context
             * @return void
             */
            toggleLoading: (isLoading: boolean): void => setState((state: State) =>
                ({
                    interface: {
                        ...state.interface,
                        isLoading,
                    },
                })
            ),
            /**
             * Set the isNavOpen property in the Interface context
             * 
             * @param isNavOpen Boolean representing the current state of
             * isNavOpen property in the Interface context
             * @return void
             */
            toggleNav: (isNavOpen: boolean): void => setState((state: State) =>
                {
                    let navStatus = !state.interface.isNavOpen;
                    if (isNavOpen)
                    {
                        navStatus = isNavOpen;
                    }

                    const body: Element | null = document.querySelector('body');

                    if (body)
                    {
                        if (navStatus)
                        {
                            body.classList.remove('applyOverflowXHidden');
                            body.classList.add('applyOverflowYHidden');
                        } else
                        {
                            body.classList.remove('applyOverflowYHidden');
                            body.classList.add('applyOverflowXHidden');
                        }
                    }

                    return ({
                        interface: {
                            ...state.interface,
                            isNavOpen,
                        },
                    });
                }
            ),
        },
    });

    return (
        <Interface.Provider value={state.interface}>
            <CustomNavbar/>
            <MobileNav/>
            <main role="main">
                {props.children}
            </main>
            <Footer/>
        </Interface.Provider>
    );
}

export default MainLayout;
