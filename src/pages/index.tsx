import React from 'react';
import { MainLayout } from '../layouts';
import {
    SEO,
    AutomateQualification,
    Investor,
    NationsPremier,
    SelfEmployed,
} from '../components';

const HomePage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc"/>
        <NationsPremier/>
        <SelfEmployed/>
        {/* <Investor/>
        <AutomateQualification/> */}
    </MainLayout>
);

export default HomePage;
