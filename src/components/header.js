import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
<<<<<<< HEAD
import Container from './container'
import Nav from './nav';


const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
`;
=======


import Nav from './nav'

>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
<<<<<<< HEAD
    position: absolute;
    top: 0;
    color: white;
=======
    position: relative;
    z-index: 12;
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

<<<<<<< HEAD
const HeaderName = styled.h1`
    color: white;
    text-decoration: underline;
    text-underline-position: under;
    text-transform: uppercase;
`;

const MainMenu = styled.a`
    color: white
`;

=======
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955


export default class Header extends React.Component {
    constructor() {
        super()
<<<<<<< HEAD
        this.state = {
            hamburgerActive: false,
        }
=======
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
        
    }

    render() {
        const { pages, categories, primary, currentPage } = this.props
        return (
            <Wrapper>
<<<<<<< HEAD
            <HeaderContainer>
                    <Left>
                      <HeaderName>Josh Arrowsmith</HeaderName>
                    </Left> 
                    <Right>
                    <Nav 
                        primary={primary}
                        pages={pages} 
                        categories={categories}
                        currentPage={currentPage}
                        active={this.state.hamburgerActive}
                    />     
                    </Right>
            </HeaderContainer>
=======
                    <Left>
                        <Nav 
                            primary={primary}
                            pages={pages} 
                            categories={categories}
                            currentPage={currentPage}
                        />     
                    </Left> 
                    <Right>
                    <h1>hello</h1>
                    </Right>
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
            </Wrapper>
        )
    }
}
