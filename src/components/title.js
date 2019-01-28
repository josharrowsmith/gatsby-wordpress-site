import React from 'react';
import styled from 'styled-components';

const Titleh1 = styled.h1`
    color: white;
    font-size: 1rem;
    text-decoration: none;

`

const Title = ({children}) => (
    <Titleh1>
    {children}
    </Titleh1>
)

export default Title