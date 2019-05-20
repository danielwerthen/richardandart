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
          After the party, we have arranged party buses bringing all of us home (or to central Stockholm at least). These depart at 2.00 am so make sure you keep your tickets (your invitations!). The party buses will stop at the Central station and Mariatorget on or after 3.00 am. For earlier departure from the party we recommend booking a taxi. The last ordinary bus is around ten to midnight.
        </p>
        <h3>Accommodation</h3>
        <p>
          For those of you travelling from far away we recommend Hotell Rival or Hellstens Glashus which are located quite close to the last bus drop off point at the end of the night. But really any hotel in central Stockholm will do.
        </p>
        <h3>Dress code</h3>
        <p>
          “Summer nice”/sommarfint. If you’re thinking “did they just make that up to confuse me” - See the link below for inspiration.
        </p>
        <p>
          <a href="https://pin.it/esn2tyatrngpvr">Pinterest</a>
        </p>
        <p>
          If you still have questions, feel free to discuss with <a href="mailto:art.lindstrom@gmail.com">Art</a>.
        </p>
        <h3>Children</h3>
        <p>
          We love kids, but this night we want to spend with our adult friends.
          Breast feeding infants are allowed of course.
        </p>
        <h3>Gifts</h3>
        <p>
          Yes please! Ahem - we mean, the best possible gift is of course that you celebrate this day with us. If, in addition to this lovely gift you still want to give something more, we would appreciate a contribution to our honeymoon(s). On the day, we will arrange a gift table with "gift cards". Each "gift card" will represent an experience or gift for us on our honeymoon, that you can treat us to. So the idea is you pick one, pay any amount you choose via Swish, and put the gift card in our gift bag (so no one else buys the same thing!) with your names on it so we know it's from you.
        </p>
        <h3>Mood managers</h3>
        <p>
          Yeah, that’s right, we are so casual we don’t even have toastmasters,
          we have mood managers instead! So if you want to say a few words
          during the dinner, contact them on{' '}
          <a href="mailto:moodmanagers@richardandart.com">
            moodmanagers@richardandart.com
          </a>
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
            <a href="tel:+46 73-693 50 76">+46 73-693 50 76</a>
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
            <a href="tel:+46 73-720 43 39">+46 73-720 43 39</a>
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
