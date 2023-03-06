import { useState } from "react";
import { DropdownContainer, DropdownList, ListItem, ButtonDots } from "./styles";
import ThreeDots from "../ThreeDots";
import { IMenu } from "./types";

const OptionsMenu = ({date}:IMenu) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
            isMenuOpen ? ( 
            <ButtonDots>
            <ThreeDots handleClick={toggleOpen}/>
        <DropdownContainer>
            <div>
                <DropdownList>
                    <ListItem><strong>Date:</strong> {date}</ListItem>
                </DropdownList>
            </div> 
        </DropdownContainer>
            </ButtonDots>
            ) :
            (
                <ButtonDots>
                <ThreeDots handleClick={toggleOpen}/>
                </ButtonDots>
            )

    )

}

export default OptionsMenu;