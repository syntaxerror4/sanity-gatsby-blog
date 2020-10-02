export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7758cc115f5259358eac9b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qz2egkio',
                  apiId: 'ffaea5f4-a79a-4dae-992a-7ff93c84a54e'
                },
                {
                  buildHookId: '5f7758cc900fe569bcd59669',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zrmujyk2',
                  apiId: '9c66d3f2-a5be-40c0-9a78-bc560eb0ebd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/syntaxerror4/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zrmujyk2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
