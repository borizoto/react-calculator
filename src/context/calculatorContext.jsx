import { useState } from "react";
import { createContext } from "react";

export const CalculatorContext = createContext();

export default function CalculatorProvider(props) {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    const providerValue = {
        calc, setCalc
    };

    return (
        <CalculatorContext.Provider value={providerValue}>
            {props.children}
        </CalculatorContext.Provider>
    )
}