import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Header from '../components/header'



const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const page = props.data.wordpressPage;

  return (
      <div>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <h1>for sure</h1>
      </div>
  )
}

export default PageTemplate


export const pageQuery = graphql`
  query pageQuery($id: String!) {  
    wordpressPage(id: { eq: $id }) {
      title
      content
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
    wordpressCategory(id: { eq: $id }) {
      name
    }
  }
`;