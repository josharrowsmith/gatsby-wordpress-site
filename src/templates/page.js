import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Back from '../components/background'

const Wrapper = styled.div`
  padding: 0px 20px 30px;
  position: absolute;
  top:140px;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100vh;
`;

const Content = styled.h1`
  color: white;  
  margin-left: 50px;
`;


export default class PageTemplate extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        loading: true,
      }
  }

  componentWillMount(){
    if (typeof window !== 'undefined') {
      if(window.innerWidth > 1000){
        var height = 800;
      } else {
        var height = 800;
      }
      this.setState({height: height + 'px'});
    }
  }

  render() {
  const categories = this.props.data.allWordpressCategory;
  const pages = this.props.data.allWordpressPage;
  const page = this.props.data.wordpressPage;

  return (
      <div>
      <Back height={this.state.height}/>
      <Header pages={pages} categories={categories} primary={true} currentPage={this.props.location.pathname}></Header>
      <Wrapper>
        <Content dangerouslySetInnerHTML={{ __html:page.content}}/>
      </Wrapper>
      </div>
    )
  }
}




export const pageQuery = graphql`
  query pageQuery($id: String!) {  
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }      
    allWordpressCategory {
      edges {
        node {
          id
          description
          name
          slug
        }
      }
    } 
  }
`;