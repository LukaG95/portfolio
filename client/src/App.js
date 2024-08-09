import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import Loader from './components/Loader.js';

function App() {
  const [showWebsite, setShowWebsite] = useState(true);

  useEffect(() => {
    setTimeout(()=> setShowWebsite(true), 5000);
    
  }, [])

  if (showWebsite)
  return (
    <div className={styles.app}>
      <div className={styles.left}>
        <div className={styles.placeholder}>placeholder</div>
      </div>
      <div className={styles.middle}></div>
      <div className={styles.right}>
        <div className={styles.filter}></div>
        <div className={styles.navi}></div>
      </div>
    </div>
  );
  else return <Loader />;
}

export default App;
