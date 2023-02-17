import styled from "styled-components";

export const Container = styled.div`
  width: 58rem;
  height: 68vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7edf2;
  border-radius: 8px;
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const CardStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 50rem;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 1rem 2rem 1rem 1rem;
  font-family: "Poppins", sans-serif;
  margin-top: 15px;
`;


export const Emoji = styled.span`
  font-size: 20px;
  margin-left: 1rem;
  cursor: pointer;
  float:right;
`;
export const TodoContainer = styled.div`
max-width: 40rem;
height:fit-content;
white-space: pre-wrap;  
word-wrap: break-word;
`