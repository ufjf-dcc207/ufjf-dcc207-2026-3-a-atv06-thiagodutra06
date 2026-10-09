import "./EMOJI.css";

import { useState } from "react";

type EMOJI_KEYS = "happy" | "sick" | "dead";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😁"],
    ["sick", "🤢"],
    ["dead", "💀"],
]);

export default function EMOJI() {
    
    
    const [emojiStatus, setEmojiStatus] = useState<EMOJI_KEYS>("sick");

    function happyClick() {
        console.log("status anterior: ", emojiStatus);
        console.log("happy ! ! ");
        setEmojiStatus("happy"); 
        console.log("Status atual (na fila de atualização): ", emojiStatus);
    }

    function sickClick() {
        console.log("status anterior: ", emojiStatus);
        console.log("sick ! ! ");
        setEmojiStatus("sick"); 
        console.log("Status atual (na fila de atualização): ", emojiStatus);
    }

    function deadClick() {
        console.log("status anterior: ", emojiStatus);
        console.log("dead! ");
        setEmojiStatus("dead"); 
        console.log("Status atual (na fila de atualização): ", emojiStatus);
    }
    
    return (
        <>
            <div className="EMOJI">
                {EMOJI_MAP.get(emojiStatus) || "🥸"}
            </div>
            <div className="acoes">
                <button onClick={happyClick}>happy</button>
                
                <button onClick={sickClick}>sick</button>
                <button onClick={deadClick}>dead</button>
            </div>
        </>
    );
}
