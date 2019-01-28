import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
padding: 0px 20px 30px;
position: absolute;
top:140px;
width: 100%;
padding: 0;
margin: 0;
@media screen and (max-width: 768px) {
      top: 80px;
    }  
`;

const Wrapper = ({ children, className }) => (
    <Container className={className}>
        { children }
    </Container>
)

export default Wrapper