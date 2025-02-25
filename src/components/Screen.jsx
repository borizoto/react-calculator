import { useContext } from "react";
import { CalculatorContext } from "../context/calculatorContext";
import { Textfit } from "react-textfit";

export default function Screen() {
    const { calc } = useContext(CalculatorContext)

    return (
        <Textfit className="screen" max={70} mode="single">{calc.num ? calc.num : calc.res}</Textfit>
    )
}