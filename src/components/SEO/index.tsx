import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import {
    graphql,
    StaticQuery,
} from 'gatsby';
import {
    Props,
    FetchSEODataQuery,
    PureSEOComponentData,
} from './SEO.interfaces';

export const PureSEO: Function = ({ data, description, lang = 'en', meta = [], keywords = [], title = '' }: PureSEOComponentData): JSX.Element =>
{
    const metaDescription: string = description || (data ? data.site.siteMetadata.description : '');
    const metaUrl: string = data ? data.site.siteMetadata.siteUrl : '';

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                { name: 'description', content: metaDescription },
                { property: 'og:title', content: title },
                { property: 'og:description', content: metaDescription },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: metaUrl },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:creator', content: '' },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: metaDescription },
                { name: "theme-color", content: "#1F72C1" },
            ].concat(
                keywords && (keywords.length > 0) ?
                { name: 'keywords', content: keywords.join(', ') } :
                []
            ).concat(((meta.length > 0) ? meta : []))}
        />
    );
}

const SEO: FunctionComponent<Props> = (props: Props): JSX.Element =>
(
    <StaticQuery
        query={graphql`
            query FetchSEOData {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `}
        render={(data: FetchSEODataQuery): JSX.Element => <PureSEO {...props} data={data}/>}
    />
);

export default SEO;
