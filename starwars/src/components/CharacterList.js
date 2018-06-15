import React from 'react';
import Character from './Character';

const CharacterList = props => { // props is the property data passed in from parent
  return (
    <div>
      {props.characters.map(character => (
        <Character key={character.name} character={character} />  
      ))};
    </div>
  )
};

export default CharacterList;