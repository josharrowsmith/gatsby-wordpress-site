import React from 'react'
import Particles from 'react-particles-js';
import particlesconfig from '../json/data.json'


const Background =  ({ children }) => (
    <>
      <Particles 
        params={particlesconfig} 
        style={{ position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "black"}} 
        />
      {children}
    </>
  );
export default Background;