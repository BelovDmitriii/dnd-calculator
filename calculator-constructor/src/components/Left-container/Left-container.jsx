import './Left-container.css';
import Display from './Display/Display.jsx';
import Numbers from './Numbers/Numbers.jsx';
import ArithmeticOperations from './Operations/Operations.jsx';
import EqualSign from './Equal-sign/Equal-sign.jsx';

function LeftContainer() {
  return(
    <section className="left-container">
      <div className="left-blocks">
        <Display result='100'/>
        <ArithmeticOperations />
        <Numbers />
        <EqualSign />
      </div>
    </section>
  );
}

export default LeftContainer;