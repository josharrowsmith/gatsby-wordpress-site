import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
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


const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const categoryPosts = props.data.allWordpressPost;
  const category = props.data.wordpressCategory;

  return (
      <div>
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
      </div>
  )
}

export default PageTemplate


export const pageQuery = graphql`
  query categoryQuery($id: String!, $cleanId: String!) {
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
    allWordpressPost(filter: {categories:{name:{eq: $cleanId }} }, sort: { order: ASC, fields: [date]}){
      edges{
        node {
          id
          title
          slug
          format
          acf{
            project_image{
              source_url
            }
          }
        }
      }
    }      
  }
`