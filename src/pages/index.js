import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Back from '../components/background'
import Header from '../components/header'
import Typed from '../components/typed'

export default class IndexPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const categories = this.props.data.allWordpressCategory;
    const pages = this.props.data.allWordpressPage;

    return(
        <div>
        <Back/>
        <Header pages={pages} categories={categories} currentPage={this.props.location.pathname}/>
        <Typed />
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
        }
      }
    }    
  }
`