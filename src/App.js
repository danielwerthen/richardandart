import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { StilrenProvider } from 'stilren/dist/react';
import { Client } from 'styletron-engine-atomic';
import Header from './sections/Header';
import Pride from './sections/Pride';
import Details from './sections/Details';
import RSVP from './sections/RSVP';
import Carousel from './sections/Carousel';

const styletron = new Client();

const pseudos = ['hover', 'focus', 'active'];
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
          <Pride />
          <Details />
          <Pride />
          <Carousel />
          <Pride />
          <RSVP />
        </StilrenProvider>
      </ParallaxProvider>
    );
  }
}

export default App;
