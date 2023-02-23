import React from "react";
import { IButton } from "./types";
import { ButtonStyle, ButtonClear } from "./styles";


const Button = ({ name, handleClick, type }: IButton) => {
    const getButton = () => {
        switch (type) {
            case "clear":
                return (
                    <ButtonClear onClick={handleClick}>
                        {name}
                    </ButtonClear>
                )
            case "default":
                default:
                return (
                    <ButtonStyle onClick={handleClick} >
                        {name}
                    </ButtonStyle>
                    
                )
        }
    }
    return getButton()

}

export default Button;