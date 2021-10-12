import React, {
    FunctionComponent,
    ReactElement,
} from 'react';
import { Link } from 'gatsby';
import {
    privacyPolicySection,
    privacyPolicyContent,
} from '../sharedStyles/shared.module.scss';

export const PrivacyPolicy: FunctionComponent = (): ReactElement => {
    return (
        <section id={privacyPolicySection}>
            <div className={privacyPolicyContent}>
                <h2>{`Privacy Policy`}</h2>
                <p>{`Effective Date: 01/01/2020`}</p>
                <h3>{`Agreement and Parties`}</h3>
                <p>
                    {`
                        Manhattan Banc (“Company,” “Manhattan Banc,”
                        “us,” or “we”) respects the privacy of the
                        visitors to the website (“website” or “site”)
                        and of our clients. This privacy policy
                        (“privacy policy” or “policy”) is an agreement
                        between Company and you, as the user of the
                        website (“you”). This agreement tells you when
                        this policy is effective, what information we
                        collect from you, how we might use it, how you
                        can review or change the personal information
                        you provided to us, how we may change this
                        policy, and the steps we take to ensure that
                        your personal information is protected. We take
                        your privacy very seriously and we understand
                        that your privacy is important.
                    `}
                </p>
                <p>
                    {`
                        By continuing to use the Website, you agree to
                        this Privacy Policy and the collection, use,
                        disclosure, and storage of your personal
                        information as described by this Privacy Policy.
                        If you do not agree to policy, you may not use
                        our website.
                    `}
                </p>
                <h3>{`Agreement to Terms`}</h3>
                <p>
                    {`
                        All activities in which you may engage on this
                        website are voluntary. You are not required to
                        provide any personal information to us unless
                        you choose to access features on this site which
                        require the information. If you do not agree
                        with the terms of this policy or other terms of
                        use on this website, then you should immediately
                        exit this website and discontinue using the site.
                        If you do not agree with the terms of our privacy
                        policy and our terms of use posted at
                    `} <Link to="/privacy-policy">{`https://manhattanbanc.com/privacy-policy`}</Link>
                    {` and`} <Link to="/terms-of-use">{`https://manhattanbanc.com/terms-of-use`}</Link>
                    {`
                        please do not provide us with personal information,
                        and leave this website. The terms of use of this
                        site are expressly incorporated herein by reference
                        and made a part of this policy. By using the website,
                        you signify that you agree to the terms of this
                        privacy policy as well as to our terms of use.
                    `}
                </p>
                <h3>{`Effective Date of and Changes to Privacy Policy`}</h3>
                <p>
                    {`
                        This privacy policy is effective as of January 1,
                        2020 and will remain in effect except with respect
                        to any of its provisions that are changed in the
                        future, in which case the changes will become
                        effective on the date they are posted on the website
                        or we otherwise notify you of the changes. We
                        reserve the right to change this privacy policy at
                        any time. Changes, modifications, additions, or
                        deletions will be effective immediately on their
                        posting to this site. You should check this policy
                        periodically as its terms may change from time to
                        time. Your continued use of the site after we post
                        any such modifications will constitute your
                        acknowledgment of the modified policy and your agreement
                        to abide and be bound by the modified policy. We will
                        also revise the “last updated” date found at the
                        beginning of this privacy policy when we post changes
                        to it.
                    `}
                </p>
                <h3>{`Information We Collect`}</h3>
                <p>
                    {`
                        When you use the Website, we may collect personal
                        information about you, such as your name, address,
                        Social Security number, telephone number, email
                        address, asset information, income information, or
                        any other information that you submit on
                        applications or other forms made available through
                        the Website. We collect this information when you
                        request a rate quote, begin an application, or make
                        an inquiry.
                    `}
                </p>
                <p>
                    {`
                        We may also collect personal information about you
                        from third party sources, which we may combine with
                        information that you provided to us or that was
                        previously collected. For example, we may receive
                        information from a social media service about you
                        if you use a social media account to log into the
                        Website. All such information received through the
                        website, whether or not linked from third party apps
                        and websites is subject to the terms of this policy. 
                    `}
                </p>
                <p>
                    {`
                        We also automatically collect certain information
                        related to you and your activities on the Website
                        when you visit the Website. This information includes
                        information such as your IP address, your internet
                        browser and operating system type, the date and time
                        of your visit, and the website that referred you to us
                        (“Additional Information”). We may use this Additional
                        Information that is not unique to you personally for
                        purposes of marketing and data research.
                    `}
                </p>
                <h3>{`Disclaimers`}</h3>
                <p>
                    {`
                        The privacy policy does not extend to anything that is
                        inherent in the operation of the Internet, and therefore
                        beyond Company’s control, and is not to be applied in
                        any manner contrary to applicable law or governmental
                        regulation. This online privacy policy only applies to
                        information collected through this site. This privacy
                        policy does not apply to any information we may collect
                        from you in any place other than this website.
                    `}
                </p>
                <h3>{`Cookies and Other Tracking Technologies`}</h3>
                <p>
                    {`
                        Our Website uses cookies and other tracking technologies,
                        such as web beacons (otherwise known as pixel tags). A
                        "cookie" is a small file placed on your computer that
                        helps us to recognize your browser. We use both first and
                        third-party cookies and tracking technologies on the
                        Website. These cookies and tracking technologies may
                        collect your personal information. We may use cookies and
                        tracking technologies to monitor how the Website is used,
                        customize content, serve advertisements and evaluate the
                        effectiveness of our advertising campaigns, identify
                        problems with the Website, improve the Website, analyze
                        Website traffic and other analytics purposes, monitor the
                        security of the Website, and gauge the effectiveness of
                        our communications. Most web browsers allow you to adjust
                        your preferences to reject cookies or to receive
                        notifications before they are placed. If your browser is
                        set to reject cookies, you may continue to use the Website,
                        but some aspects of the Website may not function as intended.
                    `}
                </p>
                <h3>{`Tracking`}</h3>
                <p>
                    {`
                        Our first-party cookies and tracking technologies
                        do not track users over time and across third-party
                        websites, and therefore the Website does not respond
                        to web browser do-not-track signals.
                    `}
                </p>
                <p>
                    {`
                        We also use third-party cookies to serve targeted
                        advertisements on both the Website and on
                        third-party websites. These cookies may track users
                        over time and across third-party websites and
                        services. Please note that if you opt-out of
                        advertising cookies, you may still see our
                        advertisements on third-party websites and services.
                    `}
                </p>
                <h3>{`How We Use Collected Information`}</h3>
                <p>
                    {`
                        We use both personal information and anonymous
                        information for the following purposes:
                    `}
                </p>
                <ul>
                    <li>{`To complete and fulfill your loan application;`}</li>
                    <li>{`To respond to and fulfill your requests;`}</li>
                    <li>{`For our marketing efforts, such as to send you marketing communications;`}</li>
                    <li>{`For our business purposes, such as for analysis and to develop new products and services;`}</li>
                    <li>{`To improve the Website and for analytics purposes; or`}</li>
                    <li>{`For any other purpose to which you consent.`}</li>
                </ul>
                <p>
                    {`
                        The Fair Credit Reporting Act gives you the
                        opportunity to limit the sharing of
                        “non-experience information” among our
                        affiliates. “Non-experience information”
                        includes information that is used, expected
                        to be used, or collected for the purpose of
                        establishing your eligibility for consumer
                        credit, insurance or deposit accounts, and
                        is not related solely to your transactions
                        or other experiences with us, including
                        information:
                    `}
                </p>
                <ul>
                    <li>{`From your applications, such as your income or marital status;`}</li>
                    <li>{`From a credit report, such as your credit history;`}</li>
                    <li>{`From sources used to verify representations made by you, such as your open lines of credit; or employment history.`}</li>
                </ul>
                <p>
                    {`
                        Within our company or approved affiliates of
                        the Company, we may share customer information
                        we collect on the website, providing financial
                        and other services such as:
                    `}
                </p>
                <ul>
                    <li>{`Insurance and real estate brokerage;`}</li>
                    <li>{`Home security products; or`}</li>
                    <li>{`Residential home building.`}</li>
                </ul>
                <h3>{`How We Share Personal Information`}</h3>
                <p>
                    {`
                        We will only share personal information with
                        third parties as described in this Privacy
                        Policy. Such shared personal information with
                        third parties includes:
                    `}
                </p>
                <ul>
                    <li>{`Vendors who provide employment verification, degree verification, title, document import, or other necessary services;`}</li>
                    <li>{`Manhattan Banc affiliated businesses that provide quality services or products you may be interested in;`}</li>
                    <li>{`For any purpose to which you expressly consent;`}</li>
                    <li>{`Other third parties if necessary to protect our rights or the rights or safety of others; and`}</li>
                    <li>{`Other third parties as may be required by law or regulation.`}</li>
                </ul>
                <p>
                    {`
                        We limit the information that we send
                        service providers, and require that
                        our service providers only use shared
                        personal information to perform the
                        services requested in accordance with
                        this Privacy Policy and have adequate
                        security measures in place to protect
                        any of your shared personal information.
                    `}
                </p>
                <p>
                    {`
                        For example, after you authorize us to verify
                        your credit history, we send the minimal set
                        of information needed (potentially including
                        your social security number) to ensure we
                        are requesting the correct record in an
                        encrypted form to the relevant credit
                        bureaus with the sole purpose of retrieving
                        your credit report and associated credit
                        history data. We would not send the same
                        level of information to a service provider
                        where it is not essential to perform their
                        services.
                    `}
                </p>
                <p>
                    {`
                        For retrieving bank information (transactions,
                        accounts, and other information), we use
                        Plaid as third-party service providers.
                        The respective privacy policies are
                        available here:
                    `} <Link to="/privacy-policy">{`Plaid.`}</Link>
                    {`
                        This privacy policy does not apply to such
                        third party websites.
                    `}
                </p>
                <p>
                    {`
                        In the event that we enter into a corporate
                        transaction, such as a reorganization,
                        merger, sale, joint venture, assignment,
                        transfer, or other disposition of all or
                        any portion of our business, assets, or
                        stock (including in connection with any
                        bankruptcy or similar proceedings),
                        personal information that we have
                        collected may be transferred in the
                        course of that corporate transaction to
                        the relevant third party purchaser, joint
                        venture partner, merged entity, assignee
                        or similar party.
                    `}
                </p>
                <h3>{`Third Parties`}</h3>
                <p>
                    {`
                        Other than for the purposes described in this
                        policy, we do not sell, trade, or otherwise
                        transfer your personal information or general
                        information to third parties without informing
                        you in advance.
                    `}
                </p>
                <p>
                    {`
                        We provide some of our services through contractual
                        arrangements with affiliates, services providers,
                        partners and other third parties (collectively,
                        “service partners”). Our service partners may
                        use your personal information to operate our sites
                        and to deliver their services. 
                    `}
                </p>
                <p>
                    {`
                        For example, your data may be transferred to website
                        hosting partners and other parties who assist us in
                        designing and operating the website, executing services
                        or helping us analyze collected data. These parties
                        will only use your data for the purpose of carrying
                        out the work as agreed with us and will be required to
                        keep the information confidential. We will encourage
                        our service partners to adopt and post privacy policies.
                        However, the use of your personal information by our
                        service partners is governed by the privacy policies of
                        those service partners and is not subject to our control.
                    `}
                </p>
                <p>
                    {`
                        We will release personal or general information without
                        your consent for security purposes, when required by law,
                        or to prevent imminent harm to any person or entity. We
                        will disclose personal or general information upon receipt
                        of a court order or subpoena, or to cooperate with a law
                        enforcement investigation, which may include responding
                        to requests and court orders from jurisdictions outside
                        the United States. We fully cooperate with law enforcement
                        agencies in identifying those who use our services for
                        illegal activities.
                    `}
                </p>
                <p>
                    {`
                        We reserve the right to report to law enforcement agencies
                        any activities that we in good faith believe to be unlawful,
                        as determined in our sole discretion. Release of your
                        personal data for security purposes, as described in this
                        agreement to any person or entity under any circumstances
                        shall be based on a determination made solely by us, exercising
                        our own discretion, permission for which is expressly granted
                        by you to us in accordance with this policy.
                    `}
                </p>
                <h3>{`Links to Third Parties`}</h3>
                <p>
                    {`
                        For your convenience and to improve usage of the
                        website we may insert links to third parties on
                        this site. This privacy policy does not apply to
                        such third party websites. These links take you
                        outside our service and off our website and are
                        beyond our control. This includes links from
                        partners that may use our logos as part of a
                        co-branding agreement. The sites those links can
                        take you to have their own separate privacy policy
                        and although we seek to protect the integrity of
                        our site, Manhattan Banc is not liable for the
                        content and activities of those sites. Your visits
                        and access to such websites is at your own risk.
                        Please note that those other sites may send their
                        own cookies to users, collect data, or solicit
                        personal information.
                    `}
                </p>
                <h3>{`Use of Social Media Tools`}</h3>
                <p>
                    {`
                        This website allows you to use your social media
                        accounts to pre-populate certain fields. If you
                        choose to use this feature, you are allowing us
                        to access your personal information. We encourage
                        you to review the privacy policy and any terms
                        and conditions for the social media platform you
                        select.
                    `}
                </p>
                <h3>{`How We Protect Personal Information`}</h3>
                <p>
                    {`
                        Manhattan Banc uses reasonable physical, technical,
                        and administrative security measures to protect
                        personal information we collect from loss, misuse,
                        unauthorized access, or improper disclosure. For
                        example, we use encryption technologies when
                        transmitting information to and from the Website and
                        with our third-party service providers. Please keep
                        in mind, however, that whenever you give out personal
                        information online there is a risk that third parties
                        may intercept and use that information. While we
                        strive to protect your personal information and privacy,
                        we cannot guarantee the security of any information
                        you disclose online. By using this site, you expressly
                        acknowledge and agree that we do not guarantee the
                        security of any data provided to or received by us
                        through this site and that any personal information,
                        general information, or other data or information
                        received from you through the site is provided to us
                        at your own risk, which you expressly assume.
                    `}
                </p>
                <h3>{`No Use of This Site by Persons under 18 Permitted`}</h3>
                <p>
                    {`
                        Manhattan Banc intends only persons who are 18
                        years or older to use this website. Personal
                        registration information submitted by a person
                        under the age of 18 will not be accepted. Any
                        general information provided by a person under
                        the age of 18 and gathered (for example, through
                        the use of cookies) during his or her visit
                        may be used as indicated in this policy.
                        Manhattan Banc is committed to protecting the
                        privacy of children and has no intention of
                        collecting personal data from children under the
                        age of 18. We encourage parents and guardians of
                        children under 18 to regularly check and monitor
                        their children’s use of e-mail and other activities
                        online.
                    `}
                </p>
                <h3>{`Notice Concerning Children`}</h3>
                <p>
                    {`
                        Please Note: We are a general audience site, and
                        do not direct any of our content specifically at
                        children under 13 years of age. We understand and
                        are committed to respecting the sensitive nature
                        of children’s privacy online. If we learn or have
                        reason to suspect that a site user is under age 13,
                        we will promptly delete any personal information
                        in that user’s account.
                    `}
                </p>
                <h3>{`Access to and Control Over Information`}</h3>
                <p>
                    {`
                        You may opt-out of any future marketing contacts
                        from us at any time. You can do the following by
                        contacting us via the email address or phone number
                        given on our website, and at the bottom of this
                        policy. You may see what data we have about you,
                        if any; change/correct any data we have about you;
                        delete any information about you that we are not
                        required by law to keep; and express any concern
                        you have about our use of your data.
                    `}
                </p>
                <h3>{`Updates to this Privacy Policy`}</h3>
                <p>
                    {`
                        We reserve the right to update this Privacy Policy
                        at any time. Any changes will be immediately
                        effective upon the posting of the updated policy.
                        Your continued use of the Website after these
                        updates are posted represents your consent to
                        the terms of the new Privacy Policy. Please regularly
                        check this Privacy Policy for any such updates.
                    `}
                </p>
                <p>
                    {`
                        Your Rights under the California Consumer Privacy
                        Act of 2018 (CCPA):
                    `}
                </p>
                <p>
                    {`
                        You have the right to know what categories and
                        specific pieces of personal information are
                        collected about you. As such, you may submit a
                        verifiable consumer request via the following
                        methods: Call us at
                    `} <a href="tel:+18888186393">{`(888) 818-6393`}</a>
                    {` or email us at `} <a href="mailto:admin@manhattanbancmortgage.com">{`admin@manhattanbancmortgage.com`}</a>
                </p>
                <p>
                    {`
                        You have the right to know what personal information
                        is sold, shared, or disclosed with third parties.
                        You may submit a verifiable consumer request via the
                        following methods: Call us at
                    `} <a href="tel:+18888186393">{`(888) 818-6393`}</a>
                    {` or email us at `} <a href="mailto:admin@manhattanbancmortgage.com">{`admin@manhattanbancmortgage.com`}</a>
                </p>
                <p>
                    {`
                        You have the right to opt-out of the sale of your
                        personal information. You may opt-out by emailing
                        us at
                    `} <a href="mailto:admin@manhattanbancmortgage.com">{`admin@manhattanbancmortgage.com`}</a>
                </p>
                <p>
                    {`
                        Subject to statutory exclusions, you have the right
                        to request that we delete the personal information
                        that we have collected about you. You may submit a
                        request for deletion via the following methods: Call
                        us at
                    `} <a href="tel:+18888186393">{`(888) 818-6393`}</a>
                    {` or email us at `} <a href="mailto:admin@manhattanbancmortgage.com">{`admin@manhattanbancmortgage.com`}</a>
                </p>
                <p>
                    {`
                        If you exercise your rights under the California
                        Consumer Privacy Act of 2018 (CCPA), you have the
                        right to not be discriminated against.
                    `}
                </p>
                <h3>{`Deleting or Modifying Personal Information`}</h3>
                <p>
                    {`
                        You may cancel your registration at any time,
                        and you may opt out of receiving any e-mails
                        from us.
                    `}
                </p>
                <h3>{`Right to Opt-Out of the Sale of Personal Information`}</h3>
                <p>
                    {`
                        You have the right to opt-out of the sale of
                        your personal information. You may opt-out by
                        emailing us at
                    `} <a href="mailto:admin@manhattanbancmortgage.com">{`admin@manhattanbancmortgage.com`}</a>
                    {` and following the directions.`}
                </p>
                <h3>{`Right to Request Deletion of Personal Information`}</h3>
                <p>
                    {`
                        Subject to statutory exclusions, you have the right to
                        request that we delete the personal information that
                        we have collected about you. You may submit a request
                        for deletion via the following method: Call us at
                    `} <a href="tel:+18888186393">{`(888) 818-6393`}</a>
                    {` or email us at `} <a href="mailto:admin@manhattanbancmortgage.com">{`admin@manhattanbancmortgage.com`}</a>
                </p>
                <h3>{`Update Your Contact Information`}</h3>
                <p>
                    {`
                        We encourage you promptly to update your contact
                        and personal information when it changes
                    `}
                </p>
                <h3>{`Questions or Comments`}</h3>
                <p>
                    {`
                        If you have any questions or comments relating
                        to our website or the privacy policy, send an
                        e-mail to
                    `} <a href="mailto:admin@manhattanbancmortgage.com">{`admin@manhattanbancmortgage.com`}</a>
                    {`
                        or write Attn: Privacy Compliance Officer,
                        1147 Highland Ave. Manhattan Beach Ca, 90266 
                    `}
                </p>
            </div>
        </section>
    );
}
