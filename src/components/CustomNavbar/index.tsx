import React, {
    FunctionComponent,
    ReactElement,
    useContext,
} from 'react';
import {
    graphql,
    Link,
    useStaticQuery,
} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FetchNavbarImagesQuery } from './CustomNavbar.interfaces';
import * as styles from './CustomNavbar.module.scss';
import { Dropdown } from '..';
import {
    residentialLinks,
    commercialLinks,
} from './Links';
import {
    Interface,
    InterfaceType,
} from '../../contexts';

export const CustomNavbar: FunctionComponent = (): ReactElement =>
{
    const queryResult = useStaticQuery<FetchNavbarImagesQuery>(graphql`
        query {
            mbancLogo: file(name: {eq: "mbanc-logo"}, extension: {eq: "png"}) {
                publicURL
            }
        }
    `);
    const { toggleNav } = useContext<InterfaceType>(Interface);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.barsWrapper}>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={(): void => toggleNav(true)}
                    />
                </div>
                <Link className={styles.logoWrapper} to="/">
                    <img
                        className={styles.logo}
                        src={queryResult?.mbancLogo.publicURL}
                        alt="Mbanc Logo"
                    />
                </Link>
                <Dropdown
                    links={residentialLinks}
                    title="Residential"
                />
                {/* <Dropdown
                    links={commercialLinks}
                    title="Commercial"
                /> */}
                <Link
                    className={styles.applyLink}
                    to="/conventional"
                ><button
                    className={styles.applyButton}
                    type="button"
                >Apply Now</button></Link>
            </nav>
        </header>
    );
}

export default CustomNavbar;
