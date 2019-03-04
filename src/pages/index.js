import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Back from '../components/background'
import Header from '../components/header'
import Typed from '../components/typed'
import Marquee from '../components/Marquee'
import MobileMarquee from '../components/MobileMarquee'
import { ParallaxProvider } from 'react-scroll-parallax';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';



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

const ContactInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    position: relative;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      position: relative;
      top: 110vh;
      margin-bottom: 50px;
      margin-right: 20px;
      grid-row-gap: 50px;
    } 
  `


const ResumeBtn = styled.button`
  width:calc(18vw + 6px);
  height:calc(8vw + 6px);
  color:white;
  border:3px solid white;
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;
  font-size:3vw;
  font-weight:bold;
  background: black;
  &:hover{
    color: black;
    background: white;
  }
  @media screen and (max-width: 768px) {
      width: 200px;
      height: 100px;
      font-size: 1.3rem;
    } 
`
const IconGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    align-items: center;
    justify-self: flex-start;
    margin-left: 20%;
    a {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
      margin-left: 0;
      justify-self: center;
  } 
`

const Links = styled.a`
     text-decoration: none;
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
  
  componentWillMount(){
    if (typeof window !== 'undefined') {
      if(window.innerWidth > 1000){
        var height = 2000;
      } else {
        var height = window.innerHeight;
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
       <MobileMarquee frontend={frontEnd} backend={backEnd}/>
    )

    if(window.innerWidth > 1000){
      ParallaxComponent = (
        <Marquee frontend={frontEnd} backend={backEnd}/>
      )
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
            <ContactInfo>
              <Links href="/Resume/Resume.pdf" download="_Resume.pdf"><ResumeBtn>Resume</ResumeBtn></Links>
              <IconGrid>
                <a
                  href="https://www.linkedin.com/in/josh-arrowsmith-723b02164/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  >
                  <FaLinkedin style={{"color": "white"}} size={50} />
                </a>
                <a
                  href="https://github.com/josharrowsmith"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  >
                  <FaGithub style={{"color": "white"}} size={50}/>
                </a>
                <a
                  href="mailto:josh.arrowsmith@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  >
                  <FaEnvelope style={{"color": "white"}} size={50}/>
                </a>     
              </IconGrid>
            </ContactInfo>
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