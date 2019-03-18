import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/header'
import Img from 'gatsby-image';
import Background from '../components/background';
import Fade from 'react-reveal';
import YouTube from 'react-youtube';

const MainContainer = styled.div`
    position: relative;
    top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      } 
`;

const Title = styled.h1`
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    text-align: left;
    grid-column: 1;
`
const ImageContanier = styled(Img)`
    height: 450px;
    padding: 10px;
    border: 5px white solid;
    @media screen and (max-width: 768px) {
      height: 300px;
    }
`;

const Video = styled.div`
  border: 5px white solid;
  padding: 10px;
  height: 450px;
`

const Wrapper = styled.div`
  padding: 0px 20px 30px;
  position: absolute;
  top:140px;
  @media screen and (max-width: 768px) {
        top: 80px;
        position: absolute;
      } 
`;

const Content = styled.div`
    border: 5px white solid;
    color: white;
    padding: 10px;
    height: 450px;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
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
      font-size: 0.8rem;
    }
`
export default class PageTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  const categories = this.props.data.allWordpressCategory;
  const pages = this.props.data.allWordpressPage;
  const post = this.props.data.wordpressPost;
  let video;
  let width;
  let height;

  //Back to this stupid hack will fix later
  if (typeof window !== 'undefined') {  
    if(window.innerWidth > 1000){
      height = '450'
      width = '640'
    } else {
      height = '300'
      width = '300'
    }
  }

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      mute: 1,
      showinfo: 0,
      modestbranding: 1,
      controls: 0,
      rel: 0,
      showsearch: 0,
    }
  };

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

  const YouTubeGetID = (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  if (typeof window !== 'undefined') {  
    if(post.acf.video !== null && window.innerWidth > 1000){
      video = (
              <Video>
                <YouTube
                  videoId={YouTubeGetID(post.acf.video)}
                  opts={opts}
                  onReady={this._onReady}
                />
              </Video> 
              )
    } else {
      video = (<ImageContanier sizes={post.acf.gallery.localFile.childImageSharp.sizes} imgStyle={{ "objectFit": "fill"}}/>)
    }
  }

  

  return (
      <div>
      <Background/>
        <Header pages={pages} categories={categories} primary={true} currentPage={this.props.location.pathname}></Header>
          <Wrapper>
          <Title>{post.title}</Title>
            <MainContainer>
              <Fade left>
              {video}
              </Fade>
              <Fade right>
                <Content>
                  <TextStyle dangerouslySetInnerHTML={{ __html: post.content }} />
                  <TagsContainer>
                    {frontEnd}
                    {backEnd}
                  </TagsContainer>
                </Content>
              </Fade>
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
        video
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