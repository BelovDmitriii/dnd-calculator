import './Display.css';

function Display(props){
  return(
    <div className="left-blocks__display">
      <div className="left-blocks__display__input">
        <div className="left-blocks__display__input__text">
          {props.result}
        </div>
      </div>
    </div>
  );
}

export default Display;