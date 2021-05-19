import styles from './App.module.css';
import { useState } from 'react';
import DisplayArray from '../DisplayArray/DisplayArray';
import Form from '../Form/Form'
function App() {
  const [numArr, setNumArr] = useState([]);//inititally empty array

  const sortByFreq = ([...arr]) => {//spreaing, as we'll recieve only refrence
    const freqObj = {};
    /*forming an object with freqs
      like : [1, 2, 1, 1, 1, 3, 3]
      to : {
        1:4,
        2:1,
        3:2
      }
    */
   arr.sort();//to sort equal cases
   arr.forEach(item => {
      if (freqObj.hasOwnProperty(item)) freqObj[item]++;
      else freqObj[item] = 1;
    });

    //sorting based on custom sorting function -> i.e just by comparing frequencies of elements in freqObj
    return arr.sort((num1, num2) => freqObj[num2] - freqObj[num1]);

  }

  //SubmitHandler to be passed to Form
  const addNumToNumArray = (num) => {
    setNumArr([...numArr, num]);
  }
  return (
    <div className={styles.App}>
      <Form submitHandler={addNumToNumArray} />
      {
        numArr.length > 0 ?
          <>
            <DisplayArray label="Input Array" data={numArr} />
            <br />
            <DisplayArray label="Sorted Array" data={sortByFreq(numArr)} />
          </> : null
      }

    </div>
  );
}

export default App;
