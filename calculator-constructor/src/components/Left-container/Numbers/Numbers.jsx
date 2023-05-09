import { useContext } from 'react';
import Button from '../Button/Button';
import './Numbers.css';
import { NumberContext } from '../../NumberProvider/NumberProvider';

function Numbers() {

  const {getValue} = useContext(NumberContext);

  return(
    <section className="left-blocks__numbers">
      <Button
        modifier="numbers__button"
        text='7'
        onClick={() => {getValue(7); console.log('нажали семерку')}}
      />
      <Button
        modifier="numbers__button"
        text='8'
        onClick={() => {getValue(8); console.log('нажали восьмерку')}}
      />
      <Button
        modifier="numbers__button"
        text='9'
        onClick={() => {getValue(9); console.log('нажали девятку')}}
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
      <Button
        modifier="numbers__button"
        text='С'
      />
    </section>
  );
}

export default Numbers;