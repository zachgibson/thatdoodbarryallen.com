const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        path: edge.node.slug,
        component: path.resolve(`./src/components/blog-post.js`),
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
