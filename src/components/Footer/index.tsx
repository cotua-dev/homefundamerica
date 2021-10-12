import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import {
    useStaticQuery,
    graphql,
    Link,
} from 'gatsby';
import { FetchFooterImagesQuery } from './Footer.interfaces';
import * as styles from './Footer.module.scss';
import { residentialLinks } from '../CustomNavbar/Links';
import { LinkType } from '../Dropdown/Dropdown.interfaces';

export const Footer: FunctionComponent = (): ReactElement =>
{
    const queryResult = useStaticQuery<FetchFooterImagesQuery>(graphql`
        query {
            mbancLogo: file(name: {eq: "mbanc-logo"}, extension: {eq: "png"}) {
                publicURL
            }
            hud: file(name: {eq: "HUD"}, extension: {eq: "png"}) {
                publicURL
            }
            nmls: file(name: {eq: "NMLS"}, extension: {eq: "png"}) {
                publicURL
            }
            equal: file(name: {eq: "EQUAL"}, extension: {eq: "png"}) {
                publicURL
            }
            usda: file(name: {eq: "USDA"}, extension: {eq: "png"}) {
                publicURL
            }
            cotua: file(name: {eq: "COTUA"}, extension: {eq: "png"}) {
                publicURL
            }
        }
    `);

    return (
        <footer className={styles.footer}>
            <div className={styles.lightSectionWrapper}>
                <div className={styles.contentWrapper}>
                    <div className={styles.subContentWrapper}>
                        <img
                            className={styles.mbancLogo}
                            src={queryResult?.mbancLogo.publicURL}
                            alt="Manhattan Bank Logo"
                        />
                        <p className={styles.content}>
                            1147 Highland Ave., Manhattan Beach CA, 90266
                        </p>
                    </div>
                    <div className={styles.subContentWrapper}>
                        <div className={styles.logoWrapper}>
                            <img
                                className={styles.logo}
                                src={queryResult?.hud.publicURL}
                                alt="HUD Logo"
                            />
                            <img
                                className={styles.logo}
                                src={queryResult?.nmls.publicURL}
                                alt="NMLS Logo"
                            />
                            <img
                                className={styles.logo}
                                src={queryResult?.equal.publicURL}
                                alt="EQUAL Logo"
                            />
                            <img
                                className={styles.logo}
                                src={queryResult?.usda.publicURL}
                                alt="USDA Logo"
                            />
                        </div>
                        <p className={styles.content}>
                            NMLS# 236782 BRE# 01114985
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.linksSectionWrapper}>
                <div className={styles.linksWrapper}>
                    <strong className={styles.subtitle}>Loans</strong>
                    <ul className={styles.links}>
                        {residentialLinks.map((link: LinkType) => (
                            <li
                                className={styles.linkWrapper}
                                key={link.key}
                            >
                                <Link
                                    className={styles.link}
                                    to={link.url}
                                >{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.linksWrapper}>
                    <strong className={styles.subtitle}>About</strong>
                    <ul className={styles.links}>
                        <li className={styles.linkWrapper}>
                            <Link
                                className={styles.link}
                                to="/privacy-policy"
                            >{`Privacy Policy`}</Link>
                        </li>
                        <li className={styles.linkWrapper}>
                            <Link
                                className={styles.link}
                                to="/terms-of-use"
                            >{`Terms of Use`}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.redSectionWrapper}>
                <div className={styles.contentWrapper}>
                    <p className={styles.copyright}>
                        &copy; Manhattan Banc, All rights reserved.
                    </p>
                    <a
                        href="https://cotua.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={queryResult?.cotua.publicURL}
                            alt="COTUA Logo"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};
