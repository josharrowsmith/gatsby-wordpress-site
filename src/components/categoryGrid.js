import React from 'react';
import styled from 'styled-components';



const MainContainer = styled.div`
    position: relative;
    top: 20%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    margin: 0 20px 0 20px;
    grid-row-gap: 0;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        top: 5%;
      }  
`;

const PostWrapper = styled.div`
    opacity: 0.6;
    &:hover{
      transform: scale(1.01);
      opacity: 1;
    }
    &:nth-child(1){
      grid-column: 1 /4;
    }
    &:nth-child(2){
      grid-column: 4 /5;
    }
    &:nth-child(3){
      grid-column: 1 /2;
    }
    &:nth-child(4){
      grid-column: 2 /5;
    }
    &:nth-child(5){
      grid-column: 1 /4;
    }
    &:nth-child(6){
      grid-column: 4 /5;
    }
    @media screen and (max-width: 768px) {
        &:nth-child(n){
          grid-column: auto;
        }
      } 

`

const CategoryGrid = ({children}) => (
    <MainContainer>
        <PostWrapper>
        { children }
        </PostWrapper>
    </MainContainer>
)

export default CategoryGrid