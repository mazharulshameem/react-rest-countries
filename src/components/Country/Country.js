import React from 'react';
import "./Country.css"

const Country = ( props) => {
  const {area, region, name, flags} =  props.country;
  return (
    <div className='country'>
      <h2> Country Name: {name.common}</h2>
      <img src={flags.png} alt="" />
     <p> Area:{area}</p>
     <p> Region:{region}</p>
    </div>
  );
};

export default Country;