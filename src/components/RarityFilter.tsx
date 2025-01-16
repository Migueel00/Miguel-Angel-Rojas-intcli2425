import { useEffect, useState } from "react";
import { Potion } from "../types/Potion";
import { Dispatch, SetStateAction } from "react";
import { getPotionsByRarity } from "../helpers/potionHelpers";

interface RarityFilterProps {
    setShowingPotions: Dispatch<SetStateAction<Potion[]>>;
    potions: Potion[];
    showingPotions: Potion[];
}


const RarityFilter = ({setShowingPotions, potions} : RarityFilterProps) => {
    
    const [rarity, setRarity] = useState<string>("");
    
    useEffect(() => {
        if(rarity === ""){
            setShowingPotions(potions);
        }else{
            setShowingPotions(getPotionsByRarity(potions, rarity));
        }
    }, [rarity]);

    const handleRarity = (e : React.ChangeEvent<HTMLSelectElement> ) => {
        setRarity(e.currentTarget.value);
    }

    return(
        <div className="ml-5">
            <select onChange={handleRarity}>
                <option value="">Select...</option>
                <option value="legendary">Legendary</option>
                <option value="epic">Epic</option>
                <option value="mythic">Mithyc</option>
            </select>
            <p>You selected rarity {rarity}</p>
        </div>
    )
}

export default RarityFilter;