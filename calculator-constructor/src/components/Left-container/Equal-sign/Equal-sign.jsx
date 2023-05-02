import Button from '../Button/Button';
import './Equal-sign.css';

function EqualSign() {

  const handleClickButton = () => {
    console.log('Button');
  }
  return(
    <div className="left-blocks__equal-sign">
      <Button
        onClick={handleClickButton}
        modifier='equal-sign__button'
        text={"="}
      />
    </div>
  );
}

export default EqualSign;