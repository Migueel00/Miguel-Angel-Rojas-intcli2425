import { Dispatch, SetStateAction } from "react";
import { Potion } from "../types/Potion";

interface ModalProps {
    potion: Potion | null;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal : React.FC<ModalProps> = (potion) => {

    const handleCloseButton = () => {
        potion.setModalVisible(false);
    }

    return(
        <div className="w-[100%] min-h-screen bg-black opacity-90 absolute top-0 z-10 flex justify-center flex-col items-center px-5">
            <div className="w-[80%] flex flex-wrap p-5 text-[29px] justify-center text-center">
                <div className="w-2/6 text-white mt-5">
                    <p className="font-bold text-orange-400 text-[32px]">Primary Effects: </p>
                    {potion.potion?.effects.primary.attribute}
                </div>
                <div className="w-2/6 text-white mt-5">
                    <p className="font-bold text-orange-400 text-[32px]">Secondary Effects: </p>
                    {potion.potion?.effects.secondary.map(secondary => (<p>{secondary.attribute}</p>))}
                </div>  
                <div className="w-2/6 text-white mt-5">
                    <p className="font-bold text-orange-400 text-[32px]">Ingredients: </p>
                    {potion.potion?.ingredients.map(ingredient => (
                        <div className="text-lef flex w-[100%] mt-5 border-2">
                            <div className="flex flex-col w-[180px]">
                                <p> <span className="text-orange-400">Name: </span> </p> 
                                <p>{ingredient.name}</p>
                            </div>
                            <div className="flex flex-col ml-4 w-[180px]">
                                <p> <span className="text-orange-400">Location: </span> </p>
                                <p>{ingredient.origin.location}</p>
                            </div>
                            <div className="flex flex-col ml-4 w-[180px]">
                                <p> <span className="text-orange-400">Region: </span> </p>
                                <p>{ingredient.origin.region}</p>
                            </div>
                        </div>
                    ))}
                </div>  
                <div className="w-2/6 text-white mt-5">
                    <p className="font-bold text-orange-400 text-[32px]">Restrinction: </p>
                    <div>Class Restriction: 
                        {potion.potion?.usage.restrictions.classRestrictions.map(restrinctionClass => (
                            <p>{restrinctionClass}</p>
                        ))}

                    </div>
                    <p> <span className="font-bold text-orange-400 text-[32px]"> Level Restriction: </span> {potion.potion?.usage.restrictions.levelRequirement}</p>
                </div>
                <div className="w-2/6 text-white mt-5">
                    <p className="font-bold text-orange-400 text-[32px]">Advices: </p>
                    <div>{potion.potion?.usage.restrictions.warnings.map(warning => 
                        <p>{warning}</p>
                    )}</div>
                </div> 
                <div className="w-2/6 text-white mt-5">
                    <p className="font-bold text-orange-400 text-[32px]">Crafting Time: </p>
                    <p>{potion.potion?.crafting.time.amount} {potion.potion?.crafting.time.unit}</p>
                    <p className="font-bold text-orange-400 text-[32px]">Instructions</p>
                    <div>
                        {potion.potion?.usage.instructions.map(instruction => (
                            <p>{instruction}</p>
                        ))}
                    </div>
                </div> 
            </div>
            <button 
                className="w-[12%] bg-orange-400 rounded-lg h-20 text-[32px] mt-[-10px]"
                onClick={handleCloseButton}
            >Close</button>
        </div>  
    )
}

export default Modal;