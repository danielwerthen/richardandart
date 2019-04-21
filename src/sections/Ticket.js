import React from 'stilren/react';
import ticket from './ticket.png';

export default function Ticket(props) {
  return (
    <img
      src={ticket}
      alt="Admit one to weeding, ticket"
      $width="100%"
      $height="100%"
      {...props}
    />
  );
}
