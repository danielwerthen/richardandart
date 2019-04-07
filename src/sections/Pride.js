import React from 'stilren/react';
import { Parallax } from 'react-scroll-parallax';

function Ribbon({ color, idx }) {
  let p = (6 - idx + 1) * 25;
  console.log(p);
  return (
    <div $position="absolute" $top={`${idx * 16.66}vh`}>
      <Parallax y={[-10 * idx, 10 * idx]}>
        <div
          $background={color}
          $width="300vw"
          $height={`${100 - idx * 16.66}vh`}
        />
      </Parallax>
    </div>
  );
}

const colors = [
  '#E70000',
  '#FF8C00',
  '#FFEF00',
  '#00811F',
  '#0044FF',
  '#760089',
];

export default function Pride() {
  return (
    <div
      $height="100vh"
      $position="relative"
      $overflow="hidden"
      $background={'white' || colors[0]}
    >
      {colors.map((color, idx) => (
        <Ribbon key={color} color={color} idx={idx} />
      ))}
    </div>
  );
}
