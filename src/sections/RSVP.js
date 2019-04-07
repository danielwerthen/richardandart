import React from 'stilren/react';

export default function RSVP() {
  return (
    <div
      $height="80vh"
      $position="relative"
      $display="flex"
      $justifyContent="center"
      $alignItems="center"
      $flexDirection="column"
    >
      <h2
        $fontSize="64px"
        $fontFamily="'Limelight', cursive"
        $textTransform="uppercase"
      >
        Get your ticket!
      </h2>
      <div $position="relative">
        <button
          $padding="0.5em"
          $border="1px solid white"
          $borderRadius="6px"
          $boxShadow="2px 4px 10px 0px black"
          $fontFamily="'Limelight', cursive"
          $background="black"
          $color="white"
          $fontSize="64px"
          $activeTransform="translate(1px, 2px)"
          $activeBoxShadow="1px 2px 10px 0 black"
          $cursor="pointer"
          $outline="none"
        >
          RSVP
        </button>
        <div
          $position="absolute"
          $bottom="40%"
          $left="calc(50% - 250px)"
          $transform="rotateZ(-90deg)"
        >
          <img
            $height="32px"
            src="/hand.png"
            alt="Hand pointing towards wedding"
            $objectFit="contain"
            $transform="rotateZ(90deg)"
            $position="relative"
            $animation="movedown 2s cubic-bezier(0.65, 0.05, 0.36, 1) infinite"
          />
        </div>
      </div>
    </div>
  );
}
