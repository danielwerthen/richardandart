import React from 'stilren/react';
import { useMemo, useCallback, useState } from 'react';
import { makePopup } from '@typeform/embed';
import hand from './hand.png';
import Ticket from './Ticket';

const typeform = 'https://daniellichtenstein.typeform.com/to/AwUnwV';

export default function RSVP() {
  const [submitted, onSubmit] = useState(false);
  const popup = useMemo(() => {
    return makePopup(typeform, {
      mode: 'popup',
      autoClose: 1000,
      hideHeaders: true,
      hideFooters: true,
      onSubmit() {
        onSubmit(true);
      },
    });
  }, []);
  const openPopup = useCallback(() => {
    popup.open();
  }, []);
  const submitAgain = useCallback(() => {
    popup.open();
    onSubmit(false);
  }, []);
  return (
    <div
      id="rsvp"
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
        $textAlign="center"
      >
        Confirm your ticket!
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
          onClick={openPopup}
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
            src={hand}
            alt="Hand pointing towards wedding"
            $objectFit="contain"
            $transform="rotateZ(90deg)"
            $position="relative"
            $animation="movedown 2s cubic-bezier(0.65, 0.05, 0.36, 1) infinite"
          />
        </div>
      </div>
      {submitted && (
        <div
          $position="fixed"
          $top="0"
          $right="0"
          $bottom="0"
          $left="0"
          $background="white"
          $zIndex="20000"
          $display="flex"
          $justifyContent="center"
          $alignItems="center"
          $flexDirection="column"
        >
          <h1
            $fontSize="42px"
            $fontFamily="'Limelight', cursive"
            $textAlign="center"
            $textTransform="uppercase"
            $marginTop="-20%"
          >
            Thanks♥
          </h1>
          <h2 $margin="0 2em" $textAlign="center">
            Don’t forget to bring your ticket!
          </h2>
          <div $marginTop="4em">
            <button
              $padding="0.5em"
              $border="1px solid white"
              $borderRadius="6px"
              $boxShadow="2px 4px 10px 0px black"
              $fontFamily="'Limelight', cursive"
              $background="black"
              $color="white"
              $fontSize="32px"
              $activeTransform="translate(1px, 2px)"
              $activeBoxShadow="1px 2px 10px 0 black"
              $cursor="pointer"
              $outline="none"
              onClick={submitAgain}
            >
              RSVP for your +1
            </button>
          </div>
          <div
            $position="absolute"
            $top="75%"
            $left="50%"
            $transform="translate(-50%, -50%) scale(0.4)"
          >
            <div $mobileTransform="scale(2)">
              <Ticket />
            </div>
            <div
              $position="absolute"
              $transform="matrix(-1, 0, 0, 1, 0, 0) rotateZ(-90deg)"
              $right="-70%"
              $mobileRight="-200%"
              $top="40%"
            >
              <img
                $height="128px"
                src={hand}
                alt="Hand pointing towards wedding"
                $objectFit="contain"
                $transform="rotateZ(90deg)"
                $position="relative"
                $animation="movedown 2s cubic-bezier(0.65, 0.05, 0.36, 1) infinite"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
