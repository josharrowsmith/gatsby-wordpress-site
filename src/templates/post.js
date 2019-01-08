import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'


<<<<<<< HEAD

=======
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const categoryPosts = props.data.allWordpressPost;
  const post = props.data.wordpressPost;

  return (
      <div>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
<<<<<<< HEAD
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <img src={post.acf.project_image.source_url}/>
=======
      <Title dangerouslySetInnerHTML={{ __html: post.title }} />
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
      </div>
  )
}

export default PageTemplate


export const postQuery = graphql`
  query postQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
<<<<<<< HEAD
      acf{
        project_image{
          source_url
        }
      }
=======
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
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