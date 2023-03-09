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
    color: #ef7c8e;
  }

  @media (max-width: 463px) {
    max-width: 80px;
    height: 40px;
    padding: 1rem 0.5rem 1rem 0.5rem;
    font-size: 0.8rem;
  }
`;
export const ButtonClear = styled(ButtonStyle)`
  margin-left: 0.9em;
  height: 12px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;

  @media (max-width: 463px) {
    padding: 1rem 0.5rem 1rem 0.5rem;
    font-size: 0.7rem;
  }
`;
export const ButtonFilter = styled(ButtonStyle)`
  margin-top: 0;
  margin-left: 0.9em;
  display: flex;
  align-items: center;
  height: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  background-color: #facdd4;
  transition-duration: 300ms;
  color: #ef7c8e;
  &:hover {
    background-color: #ef7c8e;
    color: white;
    transition-duration: 300ms;
  }

  @media (max-width: 463px) {
    padding: 1rem 0.5rem 1rem 0.5rem;
    font-size: 0.7rem;
  }
`;
