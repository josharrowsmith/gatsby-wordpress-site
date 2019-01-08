import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Container from './container'
import Nav from './nav';


const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
`;

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    color: white;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderName = styled.h1`
    color: white;
    text-decoration: underline;
    text-underline-position: under;
    text-transform: uppercase;
`;

const MainMenu = styled.a`
    color: white
`;



export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            hamburgerActive: false,
        }
        
    }

    render() {
        const { pages, categories, primary, currentPage } = this.props
        return (
            <Wrapper>
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
            </Wrapper>
        )
    }
}
