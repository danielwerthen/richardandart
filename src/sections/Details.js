import React from 'stilren/react';
import map from './map.png';
import img1 from './img1.jpg';
import joel from './joel.jpg';
import lolita from './lolita.jpg';

export default function Details() {
  return (
    <div
      $display="flex"
      $justifyContent="center"
      $alignItems="center"
      $flexDirection="column"
      $fontFamily="'Barlow Semi Condensed', sans-serif"
      $fontSize="20px"
    >
      <h2
        $fontSize="64px"
        $fontFamily="'Limelight', cursive"
        $textTransform="uppercase"
      >
        Details
      </h2>
      <p>24 August 2019, 17:00 (5.00 pm)</p>
      <p>The ceremony starts at 17:45 (5.45 pm)</p>
      <ul $listStyle="none" $paddingLeft="0">
        <li>Elfviks Herrgård</li>
        <li>Elfviksvägen 152 </li>
        <li>181 90 LIDINGÖ</li>
      </ul>
      <a href="https://goo.gl/maps/mSZBEQzvhrm">
        <div $display="flex" $margin="2em 0">
          <img
            src={map}
            alt="Map to Elfviks Herrgård"
            $width="40vw"
            $height="30vw"
            $objectFit="cover"
          />
          <img
            src={img1}
            alt="Elfviks Herrgård"
            $width="40vw"
            $height="30vw"
            $objectFit="cover"
          />
        </div>
      </a>
      <div $maxWidth="500px" $margin="0 2em">
        <h3>Transportation</h3>
        <p>
          The easiest way to get to Elfviks Herrgård is via public
          transportation, first take the tube to Ropsten, and then bus 204 until
          the end of the line.
        </p>
        <p>
          After the party, we have arranged party buses bringing all of us home
          (or to central Stockholm at least). These depart at 2.00 am so make
          sure you keep your tickets (your invitations!). The party buses will
          stop at XX and XX on or after 3.00 am. For earlier departure from the
          party we recommend booking a taxi. The last bus is around ten to
          midnight.
        </p>
        <h3>Accommodation</h3>
        <p>
          For those of you travelling from far away we recommend HOTEL XXXX
          which is located quite close to the bus drop off point at the end of
          the night.
        </p>
        <h3>Dress code</h3>
        <p>
          “Summer nice”/sommarfint. If you’re thinking “did they just make that
          up to confuse me” - See the link below for inspiration LINK
        </p>
        <h3>Children</h3>
        <p>
          We love kids, but this night we want to spend with our adult friends.
          Breast feeding infants are allowed of course.
        </p>
        <h3>Gifts</h3>
        <p>
          Yes please! Ahem - I mean, the best possible gift is of course that
          you celebrate this day with us. If, in addition to this lovely gift
          you still want to give something more, Art has set up this lovely shop
          in which you can contribute to our honeymoon(s). LINK
        </p>
        <h3>Mood managers</h3>
        <p>
          Yeah, that’s right, we are so casual we don’t even have toastmasters,
          we have mood managers instead! So if you want to say a few words
          during the dinner, contact them on XXXX
        </p>
        <div $display="flex" $textAlign="center">
          <div $flex="1">
            <img
              src={joel}
              alt="Joel, mood manager"
              $maxWidth="100%"
              $borderRadius="100%"
              $objectFit="cover"
            />
            <p>Joel Axelsson</p>
          </div>
          <div $flex="1" $textAlign="center">
            <img
              src={lolita}
              alt="Lolita, mood manager"
              $maxWidth="100%"
              $borderRadius="100%"
              $objectFit="cover"
            />
            <p>Lolita Opwapo</p>
          </div>
        </div>
        <h3>About the party</h3>
        <p>
          We want you with us on this day, because you are special to us. Come
          as you are and celebrate our love with us. If you know either of us at
          all by know, you know this: it will be a party to be remembered!
        </p>
        <p>All aboard? Let’s go!</p>
      </div>
    </div>
  );
}
