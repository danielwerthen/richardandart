import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { StilrenProvider } from 'stilren/dist/react';
import { Client } from 'styletron-engine-atomic';
import Header from './sections/Header';

const styletron = new Client();

const pseudos = ['hover', 'focus'];
const breakpoints = {
  mobile: '(min-width: 768px)',
  desktop: '(max-width: 769px)',
};

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <StilrenProvider
          styletron={styletron}
          breakpoints={breakpoints}
          pseudos={pseudos}
        >
          <Header />
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <img src="/img1.jpg" alt="Elfving hård" />
          </Parallax>
        </StilrenProvider>
      </ParallaxProvider>
    );
  }
}

export default App;
