import {createContext} from 'react';

export const NumberContext = createContext();

const NumberProvider = (props) => {
  const result = '0';

  return(
    <NumberContext.Provider
      value={{result}}>
        {props.children}
      </NumberContext.Provider>
  );
};

export default NumberProvider;