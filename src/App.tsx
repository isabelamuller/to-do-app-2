import React from 'react';
import './App.css';
import Title from './Components/Title';
import styled from "styled-components";
import Input from './Components/Input';

const InterfaceContent = styled.div`
  height:85vh;
  display:block;
  width: 60rem;
  border: 1px solid black;
  padding: 1rem 1rem 1rem 1rem;
`

const App = () => {

  return (
    <InterfaceContent>
      <Title />
      mEU DEUS EU ESTOU CORINGANDO
      <Input/>
    </InterfaceContent>

  )
}

export default App;
