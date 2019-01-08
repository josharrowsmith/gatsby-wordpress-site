import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js';
import particlesconfig from '../json/data.json'
import{ injectGlobal } from 'styled-components'

injectGlobal`
    body, html, #app div {
        margin: 0;
        background: black;
        width: 100%;
        height: 100%;
    }
`
export default class Background extends React.Component {
    constructor(props) {
      super(props);
          this.state = {height: props.height, width:props.width};
    }
    
    componentWillMount(){
      console.log("WINDOW : ",window);
      this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px'});
    }
    render() {
      console.log("VIEW : ",this.state);
  
      return(
          <Particles height={this.props.height}
                  params={particlesconfig}
              />
      )
    }
  }