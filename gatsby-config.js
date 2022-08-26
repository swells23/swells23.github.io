module.exports = {
    plugins: [
        'gatsby-plugin-app-layout',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ]
}
