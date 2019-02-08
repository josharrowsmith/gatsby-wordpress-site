import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'

const ParallaxContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    padding-top: 250px;
    height: 500px;
    @media screen and (max-width: 768px) {
        display: none;
    }  
    

`
const TagsContainer = styled.div`
    color: white;
    border: 5px white solid;
    border-radius: 3px;
    width: 350px;
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
                        offsetXMax={`20%`}
                        offsetXMin={`0%`}
                        disabled={this.props.mobile}
                    >
                    <TagsContainer>
                    <TagTitle>Front-End Skills</TagTitle>
                    <br></br>
                    {this.props.frontend}
                    </TagsContainer>
                    </Parallax>
                    <Parallax
                        offsetXMax={`50%`}
                        offsetXMin={`80%`}
                        styleOuter={{marginTop: -380}}
                        disabled={this.props.mobile}
                    >
                        <TagsContainer>
                        <TagTitle>Back-End Skills</TagTitle>
                        <br></br>
                        {this.props.backend}
                        </TagsContainer>
                    </Parallax>
            </ParallaxContainer> 
            )
        }
    }
