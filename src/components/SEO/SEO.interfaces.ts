interface Meta
{
    name?: undefined;
    content: string;
    property: string;
}

export interface Props
{
    lang?: string;
    description?: string;
    meta?: ConcatArray<Meta>;
    keywords?: string[];
    title: string;
    siteUrl?: string;
}

export interface FetchSEODataQuery
{
    site: {
        siteMetadata: {
            title: string;
            description: string;
            author: string;
            siteUrl: string;
        };
    };
}

export interface PureSEOComponentData extends Props
{
    data?: FetchSEODataQuery;
}
