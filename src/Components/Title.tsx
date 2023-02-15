import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h1`
color:#A0E7E5;
cursor: default;
display:flex;
justify-content:center;
height:fit-content; 
font-display: swap;
font-size: 2.5rem;
font-family: 'Titan One', cursive;
`;

const Title: React.FC = () => {
    return (
        <TitleStyle>
            TO-DO LIST
        </TitleStyle>
    )
}

export default Title;