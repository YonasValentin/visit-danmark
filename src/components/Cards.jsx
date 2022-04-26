import React, { useState, useEffect } from 'react';
function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <main className='cards'>
      <div className='cards__container'>
        {cards.map((card) => (
          <div className='cards__card'></div>
        ))}
      </div>
    </main>
  );
}

export default Cards;
