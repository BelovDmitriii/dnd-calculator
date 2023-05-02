import './Canvas.css';
import imageIcon from '../../../images/image-img.png';

function Canvas() {
  return(
    <div className="right-blocks__canvas">
      <img className="right-blocks__canvas-img" src={imageIcon} alt="canvas-img" />
      <div className="right-blocks__canvas-text-up">Перетащите сюда</div>
      <div className="right-blocks__canvas-text-down">любой элемент из левой панели</div>
    </div>
  );
}

export default Canvas;