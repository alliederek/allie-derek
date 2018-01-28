module.exports = {
    siteMetadata: {
        url: 'http://www.alliederek.com',
        title: "Allie & Derek's Wedding Site",
        subtitle: 'June 16th, 2018 - Bath, Ohio',
        copyright: '© All rights reserved.',
        email: 'contact@alliederek.com',
        disqusShortname: '',
        menu: [
            {
                label: 'Home',
                path: '/'
            },
            {
                label: 'Where?',
                path: '/where/'
            },
            {
                label: 'When?',
                path: '/when/'
            },
            {
                label: 'Accommodations',
                path: '/accommodations/'
            },
            {
                label: 'Getting In',
                path: '/getting-in/'
            },
            {
                label: 'Contact Us',
                path: '/contactus/'
            }
        ]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: './src/assets/images/favicon.png',
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },

        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 960
                        }
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
                    },
                    `gatsby-remark-responsive-iframe`,
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    {
                        resolve: 'gatsby-remark-emojis',
                        options: {
                            // Deactivate the plugin globally (default: true)
                            active: true,
                            // Add a custom css class
                            class: 'emoji-icon',
                            // Select the size (available size: 16, 24, 32, 64)
                            size: 64,
                            // Add custom styles
                            styles: {
                                display: 'inline',
                                margin: '0',
                                'margin-top': '1px',
                                position: 'relative',
                                top: '5px',
                                width: '25px'
                            }
                        }
                    }
                ]
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: { trackingId: '' }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`roboto\:400,400i,500,700`]
            }
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
                output: '/sitemap.xml',
                serialize: ({ site, allSitePage }) =>
                    allSitePage.edges.map(edge => {
                        return {
                            url: site.siteMetadata.url + edge.node.path,
                            changefreq: 'daily',
                            priority: 0.7
                        };
                    })
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss-sass'
    ]
};
