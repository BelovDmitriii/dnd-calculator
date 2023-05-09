import { useContext } from 'react';
import './Display.css';
import { NumberContext } from '../../NumberProvider/NumberProvider';

function Display(){
  const { result } = useContext(NumberContext);
  return(
    <div className="left-blocks__display">
      <div className="left-blocks__display__input">
        <div className="left-blocks__display__input__text">
          {result}
        </div>
      </div>
    </div>
  );
}

export default Display;