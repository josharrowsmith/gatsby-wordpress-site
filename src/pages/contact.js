import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
<<<<<<< HEAD
=======

>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
import Header from '../components/header'



const Contact = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;

  return (
      <div>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <h1>hello Josh</h1>
      </div>
  )
}

export default Contact


export const contactQuery = graphql`
  query contactQuery {  
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
  }
`;