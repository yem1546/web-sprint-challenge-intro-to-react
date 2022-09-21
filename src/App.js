import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const Chardiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  column-count: 2;
  justify-content: center;
`

const App = () => {



  const [ data, setData ] = useState(null)

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Chardiv>
        {data && data.map((char) => (
          <Character character={char}/>
        ))}
      </Chardiv>
    </div>
  );
}

export default App;
