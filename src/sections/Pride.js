import React from 'stilren/react';

function Ribbon({ color, idx, ...props }) {
  return <div $background={color} $height="10px" {...props} />;
}

const colors = [
  '#E70000',
  '#FF8C00',
  '#FFEF00',
  '#00811F',
  '#0044FF',
  '#760089',
];

export default function Pride(props) {
  return (
    <>
      <div $height="35vh" />
      {colors.map((color, idx) => (
        <Ribbon key={color} color={color} idx={idx} {...props} />
      ))}
      <div $height="35vh" />
    </>
  );
}
