import React from "react";
import { TitleStyle } from "./styles";
import { ITitle } from "./types";


const Title: React.FC<ITitle> = ({title}) => {
    return (
        <TitleStyle>
            {title}
        </TitleStyle>
    )
}

export default Title;