import styled from "styled-components";

export const InterfaceContent = styled.div`
  height: 85vh;
  display: block;
  width: 60rem;
  padding: 1rem 1rem 1rem 1rem;

  @media (max-width: 753px) {
    width: 100vw;
  }
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

  @media (max-width: 753px) {
    width: 97vw;
    margin-left: 1rem;
    margin-right: 0;
  }
`;
export const TextBeforeRendering = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  cursor: default;
  user-select: none;
  margin-top: 25rem;
  
  @media (max-width: 463px) {
    font-size: 1.5rem;
  }
`;
