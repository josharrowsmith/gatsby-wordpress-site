import React from 'react'
import Link from 'gatsby-link'

import { format } from 'date-fns'

const Blog = ({ data }) => (
  <div >
    <h1>Blog</h1>
    <div >
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/blog/${node.slug}`}>
            <h3>{node.title}</h3>
          </Link>
          <div></div>
          <div>
            <Link to={`/blog/${node.slug}`}>
              <div >{format(new Date(node.date), ("MMM DD, YYYY"))}</div>
            </Link>
          </div>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
  </div>
)

export default Blog

export const pageQuery = graphql`
  query getPostQuery {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date
        }
      }
    }
  }
`
