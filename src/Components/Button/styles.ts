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
    background-color: #ffdba2;
    transition-duration: 300ms;
  }
`;
export const ButtonClear = styled(ButtonStyle)`
  margin-top: 15px;
  margin-left: 80%;
  font-size: 10px;
  padding: 1rem 1rem 1rem 1rem;
`;
