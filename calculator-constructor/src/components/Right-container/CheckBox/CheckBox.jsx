import './CheckBox.css';
import checkBoxImg from '../../../images/eye.png';
import checkBoxImgActive from '../../../images/selector-blue.png';

function CheckBox() {
  return(
    <div class="right-blocks__checkbox">
      <div class="right-blocks__checkbox__item">
        <img class="checkbox-image" src={checkBoxImg} alt="eye img" />
        <div>Runtime</div>
      </div>
      <div class="right-blocks__checkbox__item checkbox-active">
        <img class="checkbox-image" src={checkBoxImgActive} alt="selector img" />
        <div>Constructor</div>
      </div>
    </div>
  );
}

export default CheckBox;