import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
import Back from '../components/background'
import Img from 'gatsby-image';

const MainContainer = styled.div`
    position: relative;
    top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0;
        padding:0;
        text-align: center;
        margin-left: 10px;
      } 
`;

const Title = styled.h1`
    color: white;
    font-size: 1rem;
    text-decoration: none;
    text-align: left;
`

const A = styled(Link)`
    text-decoration: none;
    margin-right: 25px;
    font-size: 1.2rem;
    padding: 9px 0 7px;
    font-weight: 700;
`

const ImageContanier = styled(Img)`
    height: 430px;
    @media screen and (max-width: 768px) {
      height: 300px;
    }
`;

const Wrapper = styled.div`
  padding: 0px 20px 30px;
  position: absolute;
  top:140px;
  @media screen and (max-width: 768px) {
        top: 80px;
        padding: 0;
      } 
`;

const Content = styled.div`
    border: 5px white solid;
    color: white;
    padding: 10px;
    height: 400px;
    font-size: 1rem;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
        margin-top: 10px;
        width: 300px;
        height: auto;
      } 
`
const TextStyle = styled.p`
     margin-top: -10px;
`

const TagsContainer = styled.div`
    display: flex;
    margin-top: -10px;
`
const Tags = styled.p`
    color: black;
    background: white;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
`
export default class PageTemplate extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        loading: true,
      }
  }

  componentWillMount(){
    if(window.innerWidth > 1000){
      var height = 2000;
    } else {
      var height = 800;
    }
    this.setState({height: height + 'px'});
  }

  render() {
  const categories = this.props.data.allWordpressCategory;
  const pages = this.props.data.allWordpressPage;
  const post = this.props.data.wordpressPost;

  if(post.acf.front_end_software !== null){
    var frontEnd = post.acf.front_end_software.map((node) =>
    <Tags key={node.id}>
      {node}
    </Tags>
    );
  }

  if(post.acf.backend !== null){
    var backEnd = post.acf.backend.map((i) =>
    <Tags key={i.id}>
      {i}
    </Tags>
    );
  }

  return (
      <div>
      <Back height={this.state.height}/>
      <Header pages={pages} categories={categories} primary={true} currentPage={this.props.location.pathname}></Header>
      <Wrapper>
      <MainContainer>
        <A> 
        <Title>{post.title}</Title>
        {post.acf.gallery !== null &&
        <ImageContanier sizes={post.acf.gallery.localFile.childImageSharp.sizes} imgStyle={{ "objectFit": "fill"}}/>
        }
        </A>
        <A> 
          <Content>
          <TextStyle dangerouslySetInnerHTML={{ __html: post.content }} />
          <TagsContainer>
            {frontEnd}
            {backEnd}
          </TagsContainer>
          </Content>
        </A>
      </MainContainer>
      </Wrapper>
      </div>
    )
  }
}


export const postQuery = graphql`
  query postQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      acf{
        gallery{
          localFile{
            childImageSharp{
              sizes( maxWidth: 800 ) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        front_end_software
        backend
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
  }
`;