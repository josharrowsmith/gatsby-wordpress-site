import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Back from '../components/background'
import Header from '../components/header'
import Typed from '../components/typed'
import Marquee from '../components/Marquee'
import Contact from '../components/contact'
import MobileMarquee from '../components/MobileMarquee'
import { ParallaxProvider } from 'react-scroll-parallax';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
`;

const Parlx = styled.div`
  position: absolute;
  width: 100%;
  top: 100vh;
`

const Tags = styled.div`
    font-size: 1.5rem;
    margin: 10px;
    background: white;
    color: black;
    border-radius: 3px;
    @media screen and (max-width: 768px) {
      font-size:1.3rem;
      margin: 10px;
      background: white;
      color: black;
      border-radius: 3px;
    } 

  `

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      width: props.width,
      data: props.data
    }
  }
  
  componentDidMount(){
    if (typeof window !== 'undefined') {
      if(window.innerWidth > 1000){
        var height = 2000;
      } else {
        var height = 2000;
      }
      this.setState({height: height + 'px'});
    }
  }

  render() {
    const categories = this.props.data.allWordpressCategory;
    const pages = this.props.data.allWordpressPage;
    const post = this.props.data.wordpressPage; 

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
    let ParallaxComponent = (
       <Marquee frontend={frontEnd} backend={backEnd}/>
    )

    if (typeof window !== 'undefined') {  
    if(window.innerWidth > 1000){
      ParallaxComponent = (
        <Marquee frontend={frontEnd} backend={backEnd}/>
      )
     } else {
       ParallaxComponent = (
       <MobileMarquee frontend={frontEnd} backend={backEnd}/>
      )
     }
    }

    return(
      <Wrapper>
        <Back height={this.state.height}/>
          <Header pages={pages} categories={categories} currentPage={this.props.location.pathname}></Header>
            <Typed/>
              <Parlx>
                <ParallaxProvider>
                 {ParallaxComponent}
                </ParallaxProvider>
              </Parlx>
            {/* <Contact/> */}
      </Wrapper>
    )
  }
}

export const pageQuery = graphql`
  query homePage {
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
    allWordpressPost {
      edges{
        node {
          id
          title
          slug
          format
        }
      }
    }
    wordpressPage(slug: {eq: "about-me"}) {
      id
      title
      acf{
        backend
        front_end_software
      }
    }    
  }
`