import {createContext, useState} from 'react';

export const NumberContext = createContext();

const NumberProvider = (props) => {
  const result = '111';
  const [number, setNumber] = useState('');

  const getValue = (num) => {
    let storedValue = number;
    if(!storedValue.includes('.') || num !== '.'){
      setNumber(`${storedValue + num}`);
    };
  };

  const handleSetValue = (num) => {
    if(!number.includes('.') || num !== '.'){
      setNumber(`${(number + num).replace(/^0+/, '')}`); // задает значение, выводимое на дисплей
    }                                                    //проверка, что в числе только один знак "."
  };




  return(
    <NumberContext.Provider
      value={{
        result,
        handleSetValue,
        getValue
      }}>
        {props.children}
      </NumberContext.Provider>
  );
};

export default NumberProvider;