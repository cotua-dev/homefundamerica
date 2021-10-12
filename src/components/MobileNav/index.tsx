import React, {
    FunctionComponent,
    useContext,
} from 'react';
import {
    StaticQuery,
    graphql,
    Link,
} from 'gatsby';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    Props,
    FetchMobileNavImageQuery,
} from './MobileNav.interfaces';
import * as styles from './MobileNav.module.scss';
import {
    Interface,
    InterfaceType,
} from '../../contexts';
import {
    residentialLinks,
    commercialLinks,
} from '../CustomNavbar/Links';
import { LinkType } from "../Dropdown/Dropdown.interfaces";

export const PureMobileNav: FunctionComponent<Props> = (props: Props): JSX.Element =>
{
    const { toggleNav, isNavOpen }: InterfaceType = useContext<InterfaceType>(Interface);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
    };

    return (
        <motion.aside
            initial="closed"
            animate={isNavOpen ? 'open' : 'closed'}
            variants={variants}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className={styles.mobileNavWrapper}
        >
            <div className={styles.mobileNavHeader}>
                {/* <div
                    className={styles.mobileTitle}
                    onClick={(): void => triggerLink()}
                ><img
                    src={props.data?.mbancLogo.publicURL}
                    alt="Mbanc Logo"
                /></div> */}
                <button
                    className={styles.mobileNavCloseButton}
                    type="button"
                    onClick={(): void => toggleNav(false)}
                ><FontAwesomeIcon icon={faTimes}/></button>
            </div>
            <div className={styles.mobileNavBody}>
                <strong className={styles.mobileLinkListTitle}>
                    Residential
                </strong>
                <ul className={styles.mobileLinkList}>
                    {residentialLinks.map((link: LinkType): JSX.Element => (
                        <li
                            className={styles.mobileLinkListItem}
                            key={link.key}
                        >
                            <Link
                                to={link.url}
                                className={styles.mobileLink}
                                onClick={() => toggleNav(false)}
                            >{link.title}</Link>
                        </li>
                    ))}
                </ul>
                {/* <strong className={styles.mobileLinkListTitle}>
                    Commercial
                </strong>
                <ul className={styles.mobileLinkList}>
                    {commercialLinks.map((link: LinkType) => (
                        <li
                            className={styles.mobileLinkListItem}
                            key={link.key}
                        >
                            <p
                                className={styles.mobileLink}
                                onClick={(): void => triggerLink(link.url)}
                            >{link.title}</p>
                        </li>
                    ))}
                </ul> */}
            </div>
        </motion.aside>
    );
}

const MobileNav: FunctionComponent<Props> = (props: Props): JSX.Element =>
(
    <StaticQuery
        query={graphql`
            query FetchMobileNavImage {
                mbancLogo: file(relativePath: {eq: "mbanc-logo.webp"}) {
                    publicURL
                }
            }
        `}
        render={(data: FetchMobileNavImageQuery): JSX.Element => <PureMobileNav {...props} data={data}/>}
    />
);

export default MobileNav;
