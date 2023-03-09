import styled from "styled-components";

    export const InputStyle = styled.input `
        max-width:100%;
        min-width: 47rem;
        margin-right: 1rem;
        height:38px;
        border:1px solid black;
        padding-left: 1rem;
        border-radius: 4px;
        font-size: 1.1rem;
        outline: none;
        font-family: 'Poppins', sans-serif;
        
        @media (max-width: 688px) {
        min-width: 30rem;
        }
        @media (max-width: 538px) {
        min-width: 20rem;
        }
        @media (max-width: 342px) {
        min-width: 15rem;
        }    
    `

    export const Container = styled.div `
        display: flex;
        justify-content:center;
        align-items:center;
    `
