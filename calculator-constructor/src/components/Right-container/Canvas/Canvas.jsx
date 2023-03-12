import './Canvas.css';
import imageIcon from '../../../images/image-img.png';

function Canvas() {
  return(
    <div class="right-blocks__canvas">
      <img class="right-blocks__canvas-img" src={imageIcon} alt="canvas-img" />
      <div class="right-blocks__canvas-text-up">Перетащите сюда</div>
      <div class="right-blocks__canvas-text-down">любой элемент из левой панели</div>
    </div>
  );
}

export default Canvas;