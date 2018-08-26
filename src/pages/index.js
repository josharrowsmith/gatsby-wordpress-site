import React from 'react'
import Link from 'gatsby-link'

//
// Home page of portfolio site
//
const IndexPage = ({ data }) => {
  const homepage = data.wordpressPage
  const profileImage = data.wordpressPage.acf.home_page_image

  return (
    <div>
      <img src={profileImage}/>
      <div className="inner" dangerouslySetInnerHTML={{ __html: homepage.content }} />
    </div>
  )
}

export default IndexPage

// Pull the homepage content from Wordpress
export const homePageQuery = graphql`
query homePageQuery {
  wordpressPage(slug: {eq: "home"}) {
    id
    title
    content
    acf {
      home_page_image
    }
  }
}
`
