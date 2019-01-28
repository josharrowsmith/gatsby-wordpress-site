import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
import Back from '../components/background'

const Wrapper = styled.div`
  padding: 0px 20px 30px;
  position: absolute;
  top:140px;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100vh;
`;

const Content = styled.h1`
  color: white;  
  margin-left: 50px;
`;




const PageTemplate = (props) => {
  const categories = props.data.allWordpressCategory;
  const pages = props.data.allWordpressPage;
  const page = props.data.wordpressPage;

  return (
      <div>
      <Back/>
      <Header pages={pages} categories={categories} primary={true} currentPage={props.location.pathname}></Header>
      <Wrapper>
        <Content dangerouslySetInnerHTML={{ __html:page.content}}/>
      </Wrapper>
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
          content
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
    wordpressCategory(id: { eq: $id }) {
      name
    }
  }
`;