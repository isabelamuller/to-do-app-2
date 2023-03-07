import styled from "styled-components";

export const ButtonStyle = styled.button`
  max-width: 120px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 4px;
  background-color: #ef7c8e;
  font-size: 1rem;
  color: white;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 300ms;
  &:hover {
    background-color: #facdd4;
    transition-duration: 300ms;
    color:#ef7c8e;
  }
`;
export const ButtonClear = styled(ButtonStyle)`
  margin-left: .9em;
  height:12px;
  font-size: .8rem;
  display:flex;
  align-items:center;
  padding: 1rem 1rem 1rem 1rem;
`;
export const ButtonFilter = styled(ButtonStyle)`
  margin-top: 0;
  margin-left: .9em;
  display:flex;
  align-items:center;
  height:12px;
  font-size: .8rem;
  font-weight: 500;
  letter-spacing: .3px;
  background-color: #facdd4;
  transition-duration: 300ms;
  color:#ef7c8e;
  &:hover {
    background-color: #ef7c8e;
    color:white;
    transition-duration: 300ms;
  }
`;
