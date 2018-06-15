import React from 'react';

const Character = props => {
  return (
    <div>
      Name: {props.character.name}
    </div>
  );
};

export default Character;