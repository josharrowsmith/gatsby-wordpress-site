import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'



const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const categoryPosts = props.data.allWordpressPost;
  const post = props.data.wordpressPost;

  return (
      <div>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <img src={post.acf.project_image.source_url}/>
      </div>
  )
}

export default PageTemplate


export const postQuery = graphql`
  query postQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      acf{
        project_image{
          source_url
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
  }
`;