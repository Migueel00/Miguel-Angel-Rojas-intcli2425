import { Dispatch, SetStateAction } from "react";
import { Potion } from "../types/Potion";
interface CardProps {
    potion: Potion;
    setModalPotion: Dispatch<SetStateAction<Potion | null>>;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}


const Card : React.FC<CardProps>  = (props) => {

    const handleDetailsButton = () => {
        props.setModalVisible(true);
        props.setModalPotion(props.potion);
    }

    return ( 
        <div className="w-1/6 ml-1 flex items-center flex-col rounded-md shadow-xl bg-gray-200 mt-5 pb-3">
            <div className="w-full">
                <img className="object-cover w-full h-56 rounded-md" src={props.potion.image} alt={props.potion.name} />
            </div>
            <p className="text-center mt-2 text-orange-400 font-bold">{props.potion.name}</p>
            <div className="flex flex-row mt-2 text-sm">
                <div>
                    <p><span className="font-bold">Rarity:</span> {props.potion.rarity}</p>
                    <p><span className="font-bold">Boss:</span> {props.potion.meta.availability.drop_rate.boss}</p>
                    <p><span className="font-bold">Chance:</span> {props.potion.meta.availability.drop_rate.chance}</p>
                </div>
                <button className="bg-orange-400 ml-6 p-2 rounded-lg w-[100px]" onClick={handleDetailsButton}> Details </button>
            </div>
        </div>
    )
}

export default Card;