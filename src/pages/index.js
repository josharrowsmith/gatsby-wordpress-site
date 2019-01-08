import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
<<<<<<< HEAD
import Back from '../components/background'
import Header from '../components/header'
import Typed from '../components/typed'
=======

import Header from '../components/header'


>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955

export default class IndexPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const categories = this.props.data.allWordpressCategory;
    const pages = this.props.data.allWordpressPage;

    return(
<<<<<<< HEAD
        <div>
        <Back/>
        <Header pages={pages} categories={categories} currentPage={this.props.location.pathname}/>
        <Typed />
        </div>
    )
=======
      <div>
        <Header pages={pages} categories={categories} currentPage={this.props.location.pathname}/> 
      </div>  
    )
  
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
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
<<<<<<< HEAD
=======
          taxonomy
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
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
<<<<<<< HEAD
=======
          categories
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
        }
      }
    }    
  }
`