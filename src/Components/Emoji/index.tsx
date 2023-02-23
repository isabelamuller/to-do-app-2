import { IEmoji } from "./types";
import { Emoji as EmojiStyle } from "../Emoji/styles";

const Emoji = ({ name, handleClick }: IEmoji) => {
    const getEmoji = () => {
        switch (name) {
            case "remove":
                return (
                    <EmojiStyle role="img" aria-label="trash-can" onClick={handleClick}>🗑</EmojiStyle>
                )
            case "edit":
                return (
                    <EmojiStyle role="img" aria-label="pencil-and-paper">📝</EmojiStyle>
                )
            case "complete":
            default:
                return (
                    <EmojiStyle role="img" aria-label="done">✅</EmojiStyle>
                )

        }
    }
    return getEmoji()
}

export default Emoji;