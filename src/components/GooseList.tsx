import React from 'react';

const GooseList = () => {
 
  const goose = ['Greylag', 'Brent', 'Swan', 'Grey', 'Chen'];

  return (
    <div>
      <h2>List of Geese</h2>
      <ul>
        {}
        {goose.map((goose, index) => (
          <li key={index}>{goose}</li>
        ))}
      </ul>
    </div>
  );
};

export default GooseList;
