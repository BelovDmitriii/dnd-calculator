import { useContext } from 'react';
import './Display.css';
import { NumberContext } from '../../NumberProvider/NumberProvider';

function Display(){
  const { number } = useContext(NumberContext);
  return(
    <div className="left-blocks__display">
      <div className="left-blocks__display__input">
        <div className="left-blocks__display__input__text">
          {number}
        </div>
      </div>
    </div>
  );
}

export default Display;