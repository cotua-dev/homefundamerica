module.exports = {
    siteMetadata: {
        title: 'Manhattan Banc',
        author: '',
        description: 'mbanc. positively simple.',
        siteUrl: 'http://localhost:8000/', // For some reason, this triggers a reducer executed in action error if left blank
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Manhattan Banc',
                short_name: 'mbanc',
                start_url: '/',
                background_color: '#000000',
                theme_color: '#1F72C1',
                display: 'minimal-ui',
                icon: 'static/favicon/favicon-96x96.png',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static`,
                name: 'images',
            },
        },
    ],
};
