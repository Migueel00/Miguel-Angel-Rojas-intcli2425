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
        <div className="w-[100%] min-h-screen bg-black opacity-85 absolute top-0 z-10 flex justify-center flex-col items-center">
            <div className="w-[80%] flex flex-wrap border-2 p-5 text-xl justify-center">
                <div className="w-2/6 text-white mt-5">
                    <p>Primary Effects: </p>
                    {potion.potion?.effects.primary.attribute}
                </div>
                <div className="w-2/6 text-white mt-5">
                    <p>Secondary Effects: </p>
                    {potion.potion?.effects.secondary.map(secondary => (<p>{secondary.attribute}</p>))}
                </div>  
                <div className="w-2/6 text-white mt-5">
                    <p>Ingredients: </p>
                    {potion.potion?.ingredients.map(ingredient => (
                        <div>
                            <p> Name: {ingredient.name}</p>
                            <p> Location: {ingredient.origin.location}</p>
                            <p> Region: {ingredient.origin.region}</p>
                        </div>
                    ))}
                </div>  
                <div className="w-2/6 text-white mt-5">
                    <p>Restrinction: </p>
                    <div>Class Restriction: 
                        {potion.potion?.usage.restrictions.classRestrictions.map(restrinctionClass => (
                            <p>{restrinctionClass}</p>
                        ))}

                    </div>
                    <p>Level Restriction: {potion.potion?.usage.restrictions.levelRequirement}</p>
                </div>
                <div className="w-2/6 text-white mt-5">
                    <p>Advices: </p>
                    <div>{potion.potion?.usage.restrictions.warnings.map(warning => 
                        <p>{warning}</p>
                    )}</div>
                </div> 
                <div className="w-2/6 text-white mt-5">
                    <p>Crafting Time: </p>
                    <p>{potion.potion?.crafting.time.amount} {potion.potion?.crafting.time.unit}</p>
                    <p>Instructions</p>
                    <div>
                        {potion.potion?.usage.instructions.map(instruction => (
                            <p>{instruction}</p>
                        ))}
                    </div>
                </div> 
            </div>
            <button 
                className="w-[20%] bg-orange-400 mt-5 rounded-lg h-28"
                onClick={handleCloseButton}
            >Close</button>
        </div>  
    )
}

export default Modal;