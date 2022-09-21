import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Charbox = styled.div`
  width: 20%;
  margin: 2%;
  padding: 2%;
  border: solid grey;
  border-radius: 5px;
  background-color: grey;
  h2 {
    align-self: center;
    margin: auto;
  }
`



const Character = (props) => {
  const {character} = props
  const [ isOpen, setIsOpen ] = useState(true)

  const toggleExpand = () => {
    setIsOpen(!isOpen)
  }
  console.log("char")
  return (
    <Charbox onClick={toggleExpand}>
      <h2>{character.name}</h2>
      {isOpen &&
        <ul>
          <li>Height: {character.height}</li>
          <li>Hair Color: {character.hair_color}</li>
          <li>Skin Color: {character.skin_color}</li>
          <li>Eye Color: {character.eye_color}</li>
          <li>Born: {character.birth_year}</li>
        </ul>
        
      }
      
    </Charbox>
  )
}

export default Character