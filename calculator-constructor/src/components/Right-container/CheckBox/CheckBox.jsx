import './CheckBox.css';
import checkBoxImg from '../../../images/eye.png';
import checkBoxImgActive from '../../../images/selector-blue.png';

function CheckBox() {
  return(
    <div className="right-blocks__checkbox">
      <div className="right-blocks__checkbox__item">
        <img className="checkbox-image" src={checkBoxImg} alt="eye img" />
        <div>Runtime</div>
      </div>
      <div className="right-blocks__checkbox__item checkbox-active">
        <img className="checkbox-image" src={checkBoxImgActive} alt="selector img" />
        <div>Constructor</div>
      </div>
    </div>
  );
}

export default CheckBox;