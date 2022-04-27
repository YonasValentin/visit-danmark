import React, { useEffect } from 'react';
import Actions from './Actions';

const Person = ({ person, modifySuperficialChoices }) => {
  const { name, distance, distanceIcon, image, category } = person;    
    
  useEffect (() => {
    async function getData(){
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data);

    }

    getData();
}, []); 

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={image} alt={name} />
          
        </div>

        <div className="person-description">
          <div className="inline">
          <p className="person-name-age">
            {name}
          </p>
          <img src={`/images/${category}`} alt={category} className="restaurant-icon" />
          </div>
          <div className="inline">
          <img src={`/images/${distanceIcon}`} alt={category} className="distance-icon" />
          <p className="person-info">{distance}</p>
          </div>
        </div>
      </div>

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;
