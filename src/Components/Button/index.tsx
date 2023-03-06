import React from "react";
import { IButton } from "./types";
import { ButtonStyle, ButtonClear, ButtonFilter } from "./styles";


const Button = ({ name, handleClick, type }: IButton) => {
    const getButton = () => {
        switch (type) {
            case "clear":
                return (
                    <ButtonClear onClick={handleClick}>
                        {name}
                    </ButtonClear>
                )
            case "filter":
                return (
                    <ButtonFilter onClick={handleClick}>
                        {name}
                    </ButtonFilter>
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