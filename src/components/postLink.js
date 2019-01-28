import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'

const A = styled(Link)`
    text-decoration: none;
    margin-right: 25px;
    font-size: 1.2rem;
    padding: 9px 0 7px;
    font-weight: 700;
    &:hover {
  }
`
const postLink = ({ children}) => (
    <A>
    { children }
    </A>
)

export default postLink