import React, {
    FunctionComponent,
    ReactElement,
    useState,
} from 'react';
import {
    AnimatePresence,
    motion,
} from 'framer-motion';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {
    Props,
    LinkType,
    State,
} from './Dropdown.interfaces';
import * as styles from './Dropdown.module.scss';

const Dropdown: FunctionComponent<Props> = (props: Props): ReactElement =>
{
    const initialState: State = { toggleDropdown: false };
    const [state, setState] = useState<State>(initialState);

    /**
     * Update state to toggle dropdown links wrapper
     * 
     * @return void
     */
    const setToggleDropdown = (): void =>
    setState((state: State): State =>
        ({
            ...state,
            toggleDropdown: !state.toggleDropdown,
        })
    );

    return (
        <div
            className={styles.dropdownWrapper}
            onMouseEnter={(): void => setToggleDropdown()}
            onMouseLeave={(): void => setToggleDropdown()}
        >
            <strong className={styles.dropdownTitle}>
                {props.title}
                <FontAwesomeIcon
                    className={styles.dropdownCaret}
                    icon={faCaretDown}
                />
            </strong>
            <AnimatePresence>
                {state.toggleDropdown &&
                    <motion.ul
                        className={styles.dropdownLinksWrapper}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                    >
                        {props.links.map((link: LinkType): ReactElement => (
                            <li className={styles.dropdownLinkItem} key={link.key}>
                                <Link className={styles.dropdownLink} to={link.url}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    );
}

export default Dropdown;
