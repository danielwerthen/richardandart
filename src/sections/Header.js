import React from 'stilren/react';
import Ticket from './Ticket';
import hand from './hand.png';
import { Parallax } from 'react-scroll-parallax';
import stockholm from './stockholm.jpg';

export default function Header() {
  return (
    <>
      <div $height="110vh" $position="relative">
        <img
          src={stockholm}
          alt="Stockholm sunset"
          $position="absolute"
          $zIndex="-1"
          $height="150vh"
          $objectFit="cover"
          $objectPosition="top"
          $width="100%"
        />
        <div
          $height="100vh"
          $display="flex"
          $justifyContent="center"
          $alignItems="center"
          $flexDirection="column"
        >
          <Parallax y={[100, -100]}>
            <h1
              $fontSize="82px"
              $fontFamily="'Limelight', cursive"
              $textTransform="uppercase"
              $color="white"
              $textShadow="0 0 10px black"
              $textAlign="center"
            >
              You're invited!
            </h1>
          </Parallax>
        </div>
        <div $position="absolute" $bottom="calc(10vh + 5em)" $right="2em">
          <img
            $height="32px"
            src={hand}
            alt="Hand pointing towards wedding"
            $objectFit="contain"
            $transform="rotateZ(90deg)"
            $position="relative"
            $animation="movedown 2s cubic-bezier(0.65, 0.05, 0.36, 1) infinite"
          />
        </div>
        <div $position="absolute" $top="90%" $left="10%">
          <Parallax y={[100, -110]}>
            <Ticket $width="350px" $filter="drop-shadow(0 0 50px black)" />
          </Parallax>
        </div>
        <div $position="absolute" $top="100%" $right="10%">
          <Parallax y={[60, -60]}>
            <Ticket $width="300px" $filter="drop-shadow(0 0 20px black)" />
          </Parallax>
        </div>
        <div $position="absolute" $top="130%" $left="8%">
          <Parallax y={[60, -60]}>
            <Ticket $width="250px" $filter="drop-shadow(0 0 20px black)" />
          </Parallax>
        </div>
        <div $position="absolute" $top="135%" $right="15%">
          <Parallax y={[60, -60]}>
            <Ticket $width="320px" $filter="drop-shadow(0 0 20px black)" />
          </Parallax>
        </div>
        <div $position="absolute" $top="110%" $left="20%">
          <Parallax y={[120, -120]}>
            <Ticket
              $width="500px"
              $maxWidth="90vw"
              $filter="drop-shadow(0 0 60px black)"
            />
          </Parallax>
        </div>
      </div>
    </>
  );
}
