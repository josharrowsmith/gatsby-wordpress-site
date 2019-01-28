import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist';

const Stuff = styled.div`
    background: black;
    position: absolute;
    bottom: 100px;
    left: 70%;
    color: white;
    font-size: 3rem;
    height: 100px;
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
      left: 10%;
      font-size: 2rem;
    }
`

const Underline = styled.span`
    border-bottom: 5px white solid;
`

const words = ['Websites', 'React Apps', 'red bull'];
const word2 = ['I build', 'I make', 'I drink'];

    for (let i = 3; i < 12; i++) {
    words[i] = words[i - 3];
    }

    for (let i = 3; i < 12; i++) {
      word2[i] = word2[i - 3];
    }

const Typed = ({stuff}) => (
        <Stuff>
        <Typist
          cursor={{ show: false }}>
          {word2.map((word, i) => (
            <Underline key={word}>
              {word}
              <Typist.Backspace
                count={word.length}
                delay={(i + 1) * 1000}
              />
            </Underline>
          ))}
          Cool Stuff
        </Typist>
        <Typist cursor={{ show: false }}>
          {words.map((word, i) => (
            <Underline key={word}>
              {word}
              <Typist.Backspace
                count={word.length}
                delay={(i + 1) * 900}
              />
            </Underline>
          ))}
        </Typist>
        </Stuff>
)

export default Typed