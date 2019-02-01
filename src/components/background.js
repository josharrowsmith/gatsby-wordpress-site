import React from 'react'
import Particles from 'react-particles-js';
import particlesconfig from '../json/data.json'
import particlesconfig2 from '../json/data2.json'

export default class Background extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        height: props.height,
        width: props.width,
        data: props.data
      }
    }
    
    componentWillMount(){
      if(window.innerWidth > 1000){
        var pj = particlesconfig;
      } else {
        var pj = particlesconfig2;
      }
      this.setState({height: window.innerHeight + 'px',width:window.innerWidth+'px', data:pj});
    }
    render() {
      return(
          <Particles height={this.props.height} width={this.props.width}
                  params={this.state.data}
              />
      )
    }
  }