import { DotsContainer, DotsButton } from "./styles";
import { IDots } from "./types";

const ThreeDots = ({handleClick}: IDots) => {

    return (
        <DotsContainer>
       <DotsButton onClick={handleClick}>
        . . .
        </DotsButton> 
        </DotsContainer>
    )
}

export default ThreeDots;