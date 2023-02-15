import React from 'react';
import { InterfaceContent } from './styles';
import Title from '../Components/Title';
import Input from '../Components/Input';

const Page1 = () => {

  return (
    <InterfaceContent>
      <Title title='TO-DO LIST' />
      <Input/>
    </InterfaceContent>

  )
}

export default Page1;