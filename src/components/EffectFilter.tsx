
import { Dispatch, SetStateAction } from "react";

interface RarityFilterProps {
    setEffect: Dispatch<SetStateAction<string>>;
}

const EffectFilter = ({setEffect} : RarityFilterProps) => {


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