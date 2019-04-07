import React from 'stilren/react';
import Ticket from './Ticket';
import hand from './hand.png';
import { Parallax } from 'react-scroll-parallax';

export default function Header() {
  return (
    <>
      <div $height="110vh" $position="relative">
        <div
          $height="100vh"
          $display="flex"
          $justifyContent="center"
          $alignItems="center"
          $flexDirection="column"
        >
          <h1
            $fontSize="82px"
            $fontFamily="'Limelight', cursive"
            $textTransform="uppercase"
          >
            Your invited!
          </h1>
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
        <div
          $position="absolute"
          $top="90%"
          $right="-120px"
          $desktopRight="-2%"
          $transform="translateY(-50%) scale(0.4)"
        >
          <Parallax y={[100, -110]}>
            <Ticket />
          </Parallax>
        </div>
        <div
          $position="absolute"
          $top="75%"
          $left="-120px"
          $desktopLeft="10%"
          $transform="translateY(-50%) scale(0.6)"
        >
          <Parallax y={[200, -200]}>
            <Ticket />
          </Parallax>
        </div>
        <div
          $position="absolute"
          $top="110%"
          $left="-20px"
          $transform="translateY(-50%) scale(0.7)"
        >
          <Parallax y={[250, -250]}>
            <Ticket />
          </Parallax>
        </div>
        <div
          $display="none"
          $desktopDisplay="block"
          $position="absolute"
          $top="80%"
          $left="45%"
        >
          <Parallax y={[250, -250]}>
            <Ticket />
          </Parallax>
        </div>
      </div>
    </>
  );
}
