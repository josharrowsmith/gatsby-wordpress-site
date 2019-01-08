import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
<<<<<<< HEAD
import Back from '../components/background'

const MainContainer = styled.div`
    position: absolute;
    top: 20%;
    position: absolute;
    top: 20%;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 20px;
    width: 100%;
`;
=======

>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955


const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
<<<<<<< HEAD
  const categoryPosts = props.data.allWordpressPost;
=======
  const categoryPosts = props.data.allWordpressPost.edges[0].node.title
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
  const category = props.data.wordpressCategory;

  return (
      <div>
<<<<<<< HEAD
      <Back height={140}/>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <MainContainer>
      {categoryPosts.edges.map(({ node }) => (
          <Link to={`/post/${node.slug}`}>
            <div>
            <h3 className="post-title">{node.title}</h3>
            <img src={node.acf.project_image.source_url} width={300} height={300}/>
            </div>
          </Link>
      ))}
      </MainContainer>
=======
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <h1>{categoryPosts}</h1>
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
      </div>
  )
}

export default PageTemplate

<<<<<<< HEAD

export const pageQuery = graphql`
  query categoryQuery($id: String!, $cleanId: String!) {
=======
export const pageQuery = graphql`
  query categoryQuery($id: String!, $cleanId: Int!) {
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
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
<<<<<<< HEAD
    allWordpressPost(filter: {categories:{name:{eq: $cleanId }} }, sort: { order: ASC, fields: [date]}){
=======
    allWordpressPost(filter: {categories: { eq: $cleanId }}) {
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
      edges{
        node {
          id
          title
          slug
          format
<<<<<<< HEAD
          acf{
            project_image{
              source_url
            }
          }
=======
          categories
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
        }
      }
    }      
  }
`