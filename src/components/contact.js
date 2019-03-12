import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 200px;
    justify-items: center;
    position: absolute;
    top: 200vh;
    left: 25%;
    margin-bottom: 300px;
    margin-top: 100px;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 100px;
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

const contact = ({children}) => (
    <ContactInfo>
    <Links href="http://46.101.222.219/wp-content/uploads/2019/03/Josh-Arrowsmith-resume-2018-dec.pdf" download="_Resume.pdf"><ResumeBtn>Resume</ResumeBtn></Links>
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