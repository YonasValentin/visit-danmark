import React from 'react';
import LikedPerson from './LikedPerson';

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div id="lonely">

    <div id="liked-people">
      <h1>
        {likedUsers.length > 0
          ? "Places you liked!"
          : ''}
      </h1>

      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}

      <p>{superLikedUsers.length > 0 ? 'Places you super liked!' : ''}</p>

      {superLikedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default Lonely;
