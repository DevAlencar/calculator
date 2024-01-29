import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstClick, setFirstClick] = useState(true);

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator('');
  }

  const handleAddNumber = (number) => {
    if(firstClick){
      handleClear();
    }
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    setFirstClick(false);
  }

  const handleSum = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperator('+');
    }else {
      setCurrentNumber(String(Number(firstNumber) + Number(currentNumber)));
    }
  }

  const handleSub = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperator('-');
    }else {
      setCurrentNumber(String(Number(firstNumber) - Number(currentNumber)));
    }
  }

  const handleMul = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperator('*');
    }else {
      setCurrentNumber(String(Number(firstNumber) * Number(currentNumber)));
    }
  }

  const handleDiv = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperator('/');
    }else {
      setCurrentNumber(String(Number(firstNumber) / Number(currentNumber)));
    }
  }

  const handleEqual = () => {

    setFirstClick(true);

    switch(operator) {
      case '+':
        handleSum();
        setOperator('');
        break;
      case '-':
        handleSub();
        setOperator('');
        break;
      case '*':
        handleMul();
        setOperator('');
        break;
      case '/':
        handleDiv();
        setOperator('');
        break;
      default:
    }
    
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => handleSum()}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => handleSub()}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="=" onClick={() => handleEqual()}/>
        </Row>
        <Row>
          <Button label="/" onClick={() => handleDiv()}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="*" onClick={() => handleMul()}/>
          <Button label="C" onClick={() => handleClear()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
