import Button from '../Button/Button';
import './Numbers.css';

function Numbers() {
  return(
    <section class="left-blocks__numbers">
      <Button
        modifier="numbers__button"
        text='7'
      />
      <Button
        modifier="numbers__button"
        text='8'
      />
      <Button
        modifier="numbers__button"
        text='9'
      />
      <Button
        modifier="numbers__button"
        text='4'
      />
      <Button
        modifier="numbers__button"
        text='5'
      />
      <Button
        modifier="numbers__button"
        text='6'
      />
      <Button
        modifier="numbers__button"
        text='1'
      />
      <Button
        modifier="numbers__button"
        text='2'
      />
      <Button
        modifier="numbers__button"
        text='3'
      />
      <Button
        modifier="numbers__button"
        text='0'
      />
      <Button
        modifier="numbers__button"
        text=','
      />
    </section>
  );
}

export default Numbers;