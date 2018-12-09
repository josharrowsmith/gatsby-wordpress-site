import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'



const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const categoryPosts = props.data.allWordpressPost.edges[0].node.title
  const category = props.data.wordpressCategory;

  return (
      <div>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <h1>{categoryPosts}</h1>
      </div>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query categoryQuery($id: String!, $cleanId: Int!) {
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
    wordpressCategory(id: { eq: $id }) {
      name
    }
    allWordpressPost(filter: {categories: { eq: $cleanId }}) {
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