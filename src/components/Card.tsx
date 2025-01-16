import { Potion } from "../types/Potion";
interface CardProps {
    potion: Potion;
}


const Card : React.FC<CardProps>  = (potion) => {
    return ( 
        <div className="w-1/5 ml-1 flex items-center flex-col rounded-md shadow-xl bg-gray-200 mt-5 pb-3">
            <div className="w-full">
                <img className="object-cover w-full h-56 rounded-md" src={potion.potion.image} alt="Converse sneakers" />
            </div>
            <p className="text-center mt-2 text-orange-400 font-bold">{potion.potion.name}</p>
            <div className="flex flex-row mt-2">
                <div>
                    <p><span className="font-bold">Rarity:</span> {potion.potion.rarity}</p>
                    <p><span className="font-bold">Boss:</span> {potion.potion.meta.availability.drop_rate.boss}</p>
                    <p><span className="font-bold">Chance:</span> {potion.potion.meta.availability.drop_rate.chance}</p>
                </div>
                <button className="bg-orange-400 ml-6 p-2 rounded-lg w-[100px]"> Details </button>
            </div>
        </div>
    )
}

export default Card;