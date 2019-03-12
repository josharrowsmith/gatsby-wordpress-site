import React from 'react'
import styled from 'styled-components'
import Background from '../components/background'
import Header from '../components/header'
import Typing from '../components/typing'
import Marquee from '../components/Marquee'
import Contact from '../components/contact'
import MobileMarquee from '../components/MobileMarquee'
import { ParallaxProvider } from 'react-scroll-parallax';
import { FaAngleDown } from 'react-icons/fa';

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
const DownButton = styled.a`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 90vh;
    left: 49%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.myDivToFocus = React.createRef()
  }

  handleOnClick = (event) => {
    if(this.myDivToFocus.current){
        window.scrollTo({
          top: 800,
          behavior: 'smooth'
        })
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
        <Background/>
          <Header pages={pages} categories={categories} currentPage={this.props.location.pathname}></Header>
            <Typing/>
              <Parlx>
                <ParallaxProvider>
                 {ParallaxComponent}
                </ParallaxProvider>
              </Parlx>
              <div ref={this.myDivToFocus}>
              <DownButton onClick={this.handleOnClick}><FaAngleDown style={{"color": "white"}} size={50} /></DownButton>
              </div>
            <Contact/>
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