import Button from '../Button/Button';
import './Equal-sign.css';

function EqualSign() {
  return(
    <div class="left-blocks__equal-sign">
      <Button
        modifier='equal-sign__button'
        text = '='
      />
    </div>
  );
}

export default EqualSign;