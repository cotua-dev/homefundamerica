import React from 'react';
import { MainLayout } from '../layouts';
import { SEO } from '../components';

const ErrorPage = (): JSX.Element =>
(
    <MainLayout>
        <SEO title="Manhattan Banc | 404"/>
        <h1>404</h1>
    </MainLayout>
);

export default ErrorPage;
