import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { StilrenProvider } from 'stilren/dist/react';
import { Client } from 'styletron-engine-atomic';
import Header from './sections/Header';

const styletron = new Client();

const pseudos = ['hover', 'focus'];
const breakpoints = {
  mobile: '(max-width: 768px)',
  desktop: '(min-width: 769px)',
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
          <div style={{ height: '100vh' }} />
        </StilrenProvider>
      </ParallaxProvider>
    );
  }
}

export default App;
