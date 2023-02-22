import styled from "styled-components";
import { ButtonStyle } from "../Components/Button/styles";

export const InterfaceContent = styled.div`
  height: 85vh;
  display: block;
  width: 60rem;
  padding: 1rem 1rem 1rem 1rem;
`;

export const Container = styled.div`
  width: 58rem;
  height: 68vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  background-color: #f7edf2;
  border-radius: 8px;
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
  padding-bottom: 1.5rem;
`;
export const TextBeforeRendering = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  cursor: default;
  user-select: none;
  margin-top: 22rem;
`;

export const ButtonClear = styled(ButtonStyle)`
margin-top: 15px;
margin-left:80%;
font-size: 10px;
padding: 1rem 1rem 1rem 1rem;
`
