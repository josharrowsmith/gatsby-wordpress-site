import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom';
import Typed from 'react-typed';

const TypedContanier  = styled.div`
    background: transparent;
    position: absolute;
    bottom: 10%;
    left: 70%;
    color: white;
    font-size: 3rem;
    height: 100px;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      left: 20px;
      font-size: 2.5rem;
      line-height: 3rem;
    }
`
const word2 = ['Websites', 'React Apps', 'red bull'];
const word1 = ['I build', 'I make', 'I drink'];


const Typing = ({stuff}) => (
        <TypedContanier>
           <Typed 
                strings={word1}
                typeSpeed={40} 
                loop
                showCursor={false}
                backspeed={10}
                backDelay={1000}
                loopCount={5}
                style={{'borderBottom': '5px white solid'}}
                />
            <br></br>
            <Typed 
                strings={word2}
                showCursor={false}
                typeSpeed={50} 
                loop
                loopCount={5}
                style={{'borderBottom': '5px white solid'}}
            />
        </TypedContanier>
)

export default Typing