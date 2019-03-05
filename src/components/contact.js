import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    position: relative;
    top: -300px;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      position: relative;
      top: -500px;
      grid-row-gap: 50px;
      align-self: center;
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

const contact = ({ children}) => (
    <ContactInfo>
    <Links href="public/Resume/Resume.pdf" download="_Resume.pdf"><ResumeBtn>Resume</ResumeBtn></Links>
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
)

export default contact