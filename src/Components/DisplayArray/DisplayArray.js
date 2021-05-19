import styles from './DisplayArray.module.css';
function DisplayArray(props) {
  const { data, label } = props
  return (
    <div className={styles.Wrapper}>
      <label className={styles.Label}>{label}</label>
      <div className={styles.ListWrapper}>
        {data.map((item, index) => <span className={styles.ArrayElement} key={index}>{item}</span>)}
      </div>
    </div>
  );
}

export default DisplayArray;
