import Button from '../Button/Button';
import './Operations.css';

function ArithmeticOperations() {
  return(
    <section class="left-blocks__arithmetic-operations">
      <Button
        modifier='arithmetic-operations__button'
        text='/'
      />
      <Button
        modifier='arithmetic-operations__button'
        text='X'
      />
      <Button
        modifier='arithmetic-operations__button'
        text='-'
      />
      <Button
        modifier='arithmetic-operations__button'
        text='+'
      />
    </section>
  );
}

export default ArithmeticOperations;