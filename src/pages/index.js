import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Header from '../components/header'



export default class IndexPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const categories = this.props.data.allWordpressCategory;
    const pages = this.props.data.allWordpressPage;

    return(
      <div>
        <Header pages={pages} categories={categories} currentPage={this.props.location.pathname}/> 
      </div>  
    )
  
  }
}

export const pageQuery = graphql`
  query homePage {
    allWordpressCategory {
      edges {
        node {
          id
          description
          name
          slug
          taxonomy
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    allWordpressPost(limit: 5) {
      edges{
        node {
          id
          title
          slug
          format
          categories
        }
      }
    }    
  }
`