import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Back from '../components/background'
import LazyLoad from 'react-lazyload';
import Img from 'gatsby-image';
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import PostLink from '../components/postLink'


const MainContainer = styled.div`
    position: relative;
    top: 20%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    margin: 0 20px 0 20px;
    grid-row-gap: 0;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        top: 5%;
      }  
`;

const ImageContanier = styled(Img)`
    height:400px;
    width: 100%;
`;

const PostWrapper = styled.div`
    opacity: 0.6;
    &:hover{
      transform: scale(1.01);
      opacity: 1;
    }
    &:nth-child(1){
      grid-column: 1 /4;
    }
    &:nth-child(2){
      grid-column: 4 /5;
    }
    &:nth-child(3){
      grid-column: 1 /2;
    }
    &:nth-child(4){
      grid-column: 2 /5;
    }
    &:nth-child(5){
      grid-column: 1 /4;
    }
    &:nth-child(6){
      grid-column: 4 /5;
    }
    @media screen and (max-width: 768px) {
        &:nth-child(n){
          grid-column: auto;
        }
      } 
`

export default class PageTemplate extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  


  render() {
  const categories = this.props.data.allWordpressCategory;
  const pages = this.props.data.allWordpressPage;
  const categoryPosts = this.props.data.allWordpressPost;
  const category = this.props.data.wordpressCategory;

  
  return (
      <div>
      <Back/>
      <Header pages={pages} categories={categories} primary={true} currentPage={this.props.location.pathname}></Header>
      <Wrapper>
      <MainContainer>
      {categoryPosts.edges.map(({ node }) => (
        <PostWrapper>
        <PostLink to={`/post/${node.slug}`}>
            <LazyLoad height={600}>
            <ImageContanier sizes={node.acf.project_image.localFile.childImageSharp.sizes} src={node.acf.project_image.localFile.childImageSharp.sizes}/>
            </LazyLoad>
            <Title>{node.title}</Title>
        </PostLink>
        </PostWrapper>
      ))}
      </MainContainer>
      </Wrapper>
      </div>
    )
  }
}

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
    allWordpressPost(filter: {categories: {elemMatch: {name: { eq: $cleanId }}}}, sort: { order: ASC, fields: [date]}){
      edges{
        node {
          id
          title
          slug
          format
          acf{
            project_image{
              localFile{
                childImageSharp{
                  sizes( maxWidth: 1000 ) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
           }
        }
        }
      }
    }      
  }
`