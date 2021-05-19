import styles from './Form.module.css';
import { useState } from 'react'
function Form(props) {
  const { submitHandler } = props
  const [inputValue, setInputValue] = useState(0);
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }
  const btnClickHandler = () => {
    submitHandler(parseInt(inputValue));
    setInputValue(0);
  }
  return (
    <div className={styles.FormWrapper}>
      <input className={styles.Input} type="number" value={inputValue} onChange={inputChangeHandler} />
      <button className={styles.Button} onClick={btnClickHandler}>Add Number</button>
    </div>
  );
}

export default Form;
