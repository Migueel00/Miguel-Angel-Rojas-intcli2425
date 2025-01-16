import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Range } from "react-range";
import { Potion } from "../types/Potion";
import { FilterByLevelRequirement } from "../helpers/potionHelpers";

interface SliderProps {
    setShowingPotions: Dispatch<SetStateAction<Potion[]>>;
    potions: Potion[];
}

const Slider  = ({setShowingPotions, potions} : SliderProps) => {
    const [values, setValues] = useState([0]);

    useEffect(() => {

        if(values[0] > 0){
            setShowingPotions(FilterByLevelRequirement(potions, values[0]));
        }else {
            setShowingPotions(potions);
        }
    }, [values])
    
    
    return (
        <div className="w-[40%]">
            <p className="mb-6">Level: {values}</p>
            <Range

                step={1}
                min={0}
                max={50}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            backgroundColor: "#ccc",
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                            height: "42px",
                            width: "42px",
                            backgroundColor: "#999",
                        }}
                    />
                )}
            >

            </Range>
        </div>

    )
}

export default Slider;