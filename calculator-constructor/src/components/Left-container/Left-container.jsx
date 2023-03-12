import './Left-container.css';
import Display from './Display/Display.jsx';
import Numbers from './Numbers/Numbers.jsx';
import ArithmeticOperations from './Arithmetic-operations/Arithmetic-operations.jsx';
import EqualSign from './Equal-sign/Equal-sign.jsx';

function LeftContainer() {
  return(
    <section class="left-container">
      <div class="left-blocks">
        <Display />
        <ArithmeticOperations />
        <Numbers />
        <EqualSign />
      </div>
    </section>
  );
}

export default LeftContainer;