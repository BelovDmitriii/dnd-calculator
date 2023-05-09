import {createContext} from 'react';

export const NumberContext = createContext();

const NumberProvider = (props) => {
  const number = '0';

  return(
    <NumberContext.Provider
      value={{number}}>
        {props.children}
      </NumberContext.Provider>
  );
};

export default NumberProvider;