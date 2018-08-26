import React from 'react'
import Link from 'gatsby-link'

const Projects = ({ data }) => {
  const projectsPage = data.wordpressPage


  return (
    <div>
      <h1>working on it </h1>
    </div>
  )
}

export default Projects

// Pull the project page content from Wordpress
export const projectsPageQuery = graphql`
query projectsPageQuery {
  wordpressPage(slug: {eq: "projects"}) {
    id
    title
    content
   
  }
}
`