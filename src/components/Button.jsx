import { useContext } from "react";
import { CalculatorContext } from "../context/calculatorContext";

function getStyleName(btnSymbol) {
    const className = {
        '=': 'equals',
        '-': 'operation',
        '+': 'operation',
        'x': 'operation',
        '/': 'operation',
    }

    return className[btnSymbol];
}

export default function Button(props) {
    const { calc, setCalc } = useContext(CalculatorContext);

    function commaClick() {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + props.btnSymbol : calc.num
        })
    }

    function resetClick() {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    function clckButtonHandler() {
        const numToStr = props.btnSymbol.toString();

        let numValue;
        if (numToStr === '0' && calc.num === 0) {
            numValue = '0';
        } else {
            numValue = Number(calc.num + numToStr);
        }

        setCalc({
            ...calc,
            num: numValue
        })
    }

    function symbolClick() {
        setCalc({
            sign: props.btnSymbol,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    function equalsClick() {
        if (calc.res && calc.num) {
            const math = (a, b, symbol) => {
                const result = {
                    '%': (a, b) => a % b,
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return result[symbol](a, b);
            }

            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }
    }

    function buttonClickHandler() {
        const results = {
            '.': commaClick,
            'C': resetClick,
            '/': symbolClick,
            'x': symbolClick,
            '-': symbolClick,
            '+': symbolClick,
            '%': symbolClick,
            '=': equalsClick
        }

        if (!results[props.btnSymbol]) {
            return clckButtonHandler();
        }

        return results[props.btnSymbol]();
    }
    return (
        <button onClick={buttonClickHandler} className={`${getStyleName(props.btnSymbol)} button`}>{props.btnSymbol}</button>
    )
}