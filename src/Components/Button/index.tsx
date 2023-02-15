import React from "react";
import { IButton } from "./types";
import { ButtonStyle } from "./styles";


const Button:React.FC<IButton> = ({name}) => {

    return(
        <ButtonStyle>
            {name}
        </ButtonStyle>
    )
}

export default Button;