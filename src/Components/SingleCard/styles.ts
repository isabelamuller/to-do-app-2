import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 50rem;
  height: fit-content;
  padding: 1rem 2rem 1rem 1rem;
  font-family: "Poppins", sans-serif;
  margin-top: 15px;
`;

export const TodoContainer = styled.div`
  max-width: 40rem;
  height: fit-content;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const CardStyleDone = styled(CardStyle)`
  background-color: #ef7c8e;
`;

export const DoneText = styled.div`
  margin-top: -8px;
  position: absolute;
  font-size: 8px;
`;

export const CardContent = styled.div`
  display: flex;
  width:50rem;
  align-items: center;
  justify-content: space-between;
`;
