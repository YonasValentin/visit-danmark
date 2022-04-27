import React, { useEffect } from 'react';


const LikedPerson = ({ person }) => {

  const { name, image } = person;    
    
  useEffect (() => {
    async function getData(){
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data);

    }

    getData();
}, []); 

return (
  <div className="liked-person">
    <div className="liked-person-image">
    <img src={image} alt={name} />
    </div>
  </div>
)
};

export default LikedPerson;
