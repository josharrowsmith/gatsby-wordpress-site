import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js';
import particlesconfig from '../json/data.json'
import particlesconfig2 from '../json/data2.json'

export default class Background extends React.Component {
    constructor(props) {
      super(props);
          this.state = {height: props.height, width:props.width, data:props.data};
    }
    
    componentDidMount(){
      console.log("WINDOW : ",window.innerHeight, window.innerWidth);
      if(window.innerWidth > 1000){
        var pj = particlesconfig;
      } else {
        var pj = particlesconfig2;
      }
      this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px', data:pj});
    }
    render() {
      // console.log("VIEW : ",this.state);
  
      return(
          <Particles height={this.props.height} width={this.state.width}
                  params={this.state.data}
              />
      )
    }
  }