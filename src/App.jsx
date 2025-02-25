import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import CalculatorProvider from './context/calculatorContext';

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {
  return (
    <CalculatorProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttonValues.flat().map((btn, index) => (
            <Button
              btnSymbol={btn}
              key={index}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalculatorProvider>
  )
}

export default App;