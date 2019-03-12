import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'

const ParallaxContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    padding-top: 250px;
    height: 500px;
    
`
const TagsContainer = styled.div`
    color: white;
    border: 5px white solid;
    border-radius: 3px;
    width: 400px;
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: start;
    padding: 10px;
`
const TagTitle = styled.h1`
    color: white;
    margin: 0;
    padding:0;
    width: 100%;
`

export default class Marquee extends React.Component {
    constructor(props) {
        super(props);
            this.state = {backend: props.backend, frontend:props.frontend, mobile: false};
    }


    render() {

        return (
            <ParallaxContainer>
                    <Parallax
                        offsetXMax={`30%`}
                        offsetXMin={`-5%`}
                    >
                        <TagsContainer>
                            <TagTitle>Front-End Skills</TagTitle>
                                {this.props.frontend}
                        </TagsContainer>
                    </Parallax>
                    <Parallax
                        offsetXMax={`40%`}
                        offsetXMin={`80%`}
                        styleOuter={{marginTop: -380}}
                    >
                        <TagsContainer>
                            <TagTitle>Back-End Skills</TagTitle>
                                {this.props.backend}
                        </TagsContainer>
                    </Parallax>
            </ParallaxContainer> 
            )
        }
    }