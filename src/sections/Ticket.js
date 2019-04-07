import React from 'stilren/react';
import { Parallax } from 'react-scroll-parallax';
import hand from './hand.png';

function Blocker({ size, border, color, offset = 0, ...props }) {
  return (
    <>
      <div
        $position="absolute"
        $top={`${-size / 2 - offset}px`}
        $left={`${-size / 2 - offset}px`}
        $borderRadius="100%"
        $height={`${size}px`}
        $width={`${size}px`}
        $border={`${border} solid ${color}`}
        {...props}
      />
      <div
        $position="absolute"
        $top={`${-size / 2 - offset}px`}
        $right={`${-size / 2 - offset}px`}
        $borderRadius="100%"
        $height={`${size}px`}
        $width={`${size}px`}
        $border={`${border} solid ${color}`}
        {...props}
      />
      <div
        $position="absolute"
        $bottom={`${-size / 2 - offset}px`}
        $right={`${-size / 2 - offset}px`}
        $borderRadius="100%"
        $height={`${size}px`}
        $width={`${size}px`}
        $border={`${border} solid ${color}`}
        {...props}
      />
      <div
        $position="absolute"
        $bottom={`${-size / 2 - offset}px`}
        $left={`${-size / 2 - offset}px`}
        $borderRadius="100%"
        $height={`${size}px`}
        $width={`${size}px`}
        $border={`${border} solid ${color}`}
        {...props}
      />
    </>
  );
}

function TicketFrame({
  blockSize = 70,
  color1 = 'red',
  color2 = 'yellow',
  background = 'white',
  borders,
  children,
  ...props
}) {
  const reverse = borders;
  return (
    <div $position="relative" $overflow="hidden" {...props}>
      {reverse.reduce(
        (body, bsize, idx, arr) => (
          <React.Fragment>
            <div
              $border={`${bsize}px solid ${idx % 2 === 0 ? color1 : color2}`}
              $overflow="hidden"
              $position="relative"
            >
              {body}
            </div>
            <Blocker
              size={
                blockSize + arr.slice(0, idx).reduce((sum, i) => sum + i, 0)
              }
              border={`${bsize}px`}
              offset={bsize}
              color={idx % 2 === 0 ? color1 : color2}
              $background={
                idx === arr.length - 1
                  ? background
                  : idx % 2 !== 0
                  ? color1
                  : color2
              }
            />
          </React.Fragment>
        ),
        children
      )}
    </div>
  );
}

export default function Ticket(props) {
  return (
    <TicketFrame
      $display="inline-block"
      borders={[1, 2, 2, 13]}
      color1="#AA2C21"
      color2="#ECB61D"
      {...props}
    >
      <div
        $height="225px"
        $width="450px"
        $display="flex"
        $justifyContent="center"
        $alignItems="center"
        $background="#ECB61D"
        $position="relative"
      >
        <div
          $marginTop="-40px"
          $fontFamily="'Limelight', cursive"
          $fontSize="80px"
          $textTransform="uppercase"
          $color="#131313"
          $lineHeight="0.8em"
        >
          <div $textAlign="center">Admit</div>
          <div $textAlign="center">one</div>
        </div>
        <div
          $position="absolute"
          $transform=""
          $bottom="3%"
          $fontSize="18px"
          $color="#AA2C21"
          $right="45px"
          $fontFamily="'Barlow Semi Condensed', sans-serif"
          $fontWeight="bold"
        >
          <div>5pm-</div>
          <div>2am</div>
        </div>
        <div $position="absolute" $bottom="5%" $left="72px">
          <Parallax x={[-20, 20]}>
            <img
              $height="32px"
              src={hand}
              alt="Hand pointing towards wedding"
              $objectFit="contain"
            />
          </Parallax>
        </div>
        <div
          $position="absolute"
          $bottom="10%"
          $fontSize="28px"
          $fontFamily="'Barlow Semi Condensed', sans-serif"
          $fontWeight="bold"
        >
          Wedding!
        </div>
        <div
          $position="absolute"
          $bottom="3%"
          $fontSize="14px"
          $fontFamily="'Barlow Semi Condensed', sans-serif"
          $fontWeight="bold"
          $color="#AA2C21"
        >
          Elfviks Herrgård
        </div>
        <div
          $position="absolute"
          $transform="translateX(-37%) rotateZ(90deg)"
          $top="47%"
          $fontSize="10px"
          $left="0"
          $fontFamily="'Rye', cursive"
        >
          www.richardandart.com
        </div>
        <div
          $position="absolute"
          $transform="translateX(37%) rotateZ(-90deg)"
          $top="47%"
          $fontSize="10px"
          $right="0"
          $fontFamily="'Rye', cursive"
        >
          www.richardandart.com
        </div>
        <div
          $position="absolute"
          $bottom="60px"
          $left="45px"
          $right="45px"
          $borderTop="2px solid rgba(0,0,0,0.4)"
        />
        <div
          $position="absolute"
          $bottom="10px"
          $right="96px"
          $borderRight="2px solid rgba(0,0,0,0.4)"
          $height="50px"
        />
        <div
          $position="absolute"
          $top="30px"
          $bottom="30px"
          $left="35px"
          $right="35px"
          $borderRight="2px solid rgba(0,0,0,0.4)"
          $borderLeft="2px solid rgba(0,0,0,0.4)"
        />
      </div>
    </TicketFrame>
  );
}
