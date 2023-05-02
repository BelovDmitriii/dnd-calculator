import './Button.css';

function Button (props) {
  function createClass() {
    return 'button left-blocks__' + props.modifier;
  }

  return(
    <>
      <section className={createClass()}>
        {props.text}
      </section>
    </>
  );
}

export default Button;