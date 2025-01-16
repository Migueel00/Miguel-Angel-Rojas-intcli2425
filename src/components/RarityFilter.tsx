import { Dispatch, SetStateAction } from "react";

interface RarityFilterProps {
    setRarity: Dispatch<SetStateAction<string>>;
    rarity: string;
}


const RarityFilter = ({setRarity, rarity} : RarityFilterProps) => {


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