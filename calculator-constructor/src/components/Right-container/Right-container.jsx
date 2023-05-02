import './Right-container.css';
import CheckBox from './CheckBox/CheckBox.jsx';
import Canvas from './Canvas/Canvas.jsx';

function RightContainer() {
  return(
    <section className="right-container">
      <div className ="right-blocks">
        <CheckBox />
        <Canvas />
      </div>
    </section>
  );
}

export default RightContainer;