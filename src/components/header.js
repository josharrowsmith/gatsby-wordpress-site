import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'


import Nav from './nav'


const Wrapper = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 12;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;



export default class Header extends React.Component {
    constructor() {
        super()
        
    }

    render() {
        const { pages, categories, primary, currentPage } = this.props
        return (
            <Wrapper>
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
            </Wrapper>
        )
    }
}
