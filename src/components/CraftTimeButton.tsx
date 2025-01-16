import { useState } from "react";
import { calculateCraftingTime } from "../helpers/potionHelpers";
import { Potion } from "../types/Potion";

interface CraftTimeButton {
    showingPotions: Potion[];
}



const CraftTimeButton = ({showingPotions} : CraftTimeButton) => {
    const [time, setTime] = useState<number>(0);

    const handleButton = () => {
        setTime(calculateCraftingTime(showingPotions));
    }   

    return (
        <div className="w-[20%]">
            <button className="bg-orange-400 w-[100%] h-10 rounded-lg bg-orna" onClick={handleButton}>Craft Time</button>
            <p>Crafting time is: {time}</p>
        </div>
    )
}

export default CraftTimeButton;