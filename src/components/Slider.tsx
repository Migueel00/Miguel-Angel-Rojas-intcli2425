import { Dispatch, SetStateAction } from "react"
import { Range } from "react-range";

interface SliderProps {
    values: number[],
    setValues: Dispatch<SetStateAction<number[]>>;
}

const Slider  = ({values, setValues} : SliderProps) => {

    return (
        <div className="w-[40%]">
            <p className="mb-6">Level: {values}</p>
            <Range

                step={1}
                min={0}
                max={100}
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