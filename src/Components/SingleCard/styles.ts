import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 50rem;
  height: fit-content;
  padding: 1.3rem 2rem 1.8rem 1rem;
  font-family: "Poppins", sans-serif;
  margin-top: 1.4rem;
`;

export const TodoContainer = styled.div`
  max-width: 35rem;
  font-size: 1rem;
  height: fit-content;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const CardStyleDone = styled(CardStyle)`
  border: 2px solid #ef7c8e;
`;

export const DoneText = styled.div`
  margin-top: -.5rem;
  font-size: .7rem;
  width:fit-content;
`;

export const CardContent = styled.div`
  display: flex;
  width: 50rem;
  align-items: center;
  justify-content: space-between;
`;

export const InputEdit = styled.input`
  width: 30rem;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: .6rem;
`;


