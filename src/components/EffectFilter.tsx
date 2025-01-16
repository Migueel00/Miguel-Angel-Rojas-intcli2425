import { useEffect, useState } from "react";
import { Potion } from "../types/Potion";
import { Dispatch, SetStateAction } from "react";
import { findPotionByEffect } from "../helpers/potionHelpers";

interface RarityFilterProps {
    setShowingPotions: Dispatch<SetStateAction<Potion[]>>;
    potions: Potion[];
}

const EffectFilter = ({setShowingPotions, potions} : RarityFilterProps) => {
    const [effect, setEffect] = useState<string>("");

    useEffect(() => {
        effect === '' ? setShowingPotions(potions) :  setShowingPotions(findPotionByEffect(potions, effect));
    }, [effect]);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEffect(event.currentTarget.value);
    }

    return (
        <div className="w-[20%]">
            <input type="text" className="border-2 border-black ml-2" onChange={changeHandler}></input>
        </div>
    );
}

export default EffectFilter;