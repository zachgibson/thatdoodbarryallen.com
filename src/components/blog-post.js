import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
