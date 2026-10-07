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
    }

    return (
        <>
            <div className="EMOJI">
                
                {EMOJI_MAP.get(emojiStatus) || "🥸"}
            </div>
            <div className="acoes">
                <button onClick={happyClick}>happy</button>
            </div>
        </>
    );
}