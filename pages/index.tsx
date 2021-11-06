import { useState } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

let URL = '';

if (process.env.NODE_ENV === 'development') {
  URL = process.env.NEXT_PUBLIC_API_DEV_URL!;
} else {
  URL = process.env.NEXT_PUBLIC_API_PROD_URL!;
}

console.log('🚀 ~ file: index.tsx ~ line 6 ~ URL', URL);

console.log(process.env.NEXT_PUBLIC_API_PROD_URL!);
console.log(process.env.NEXT_PUBLIC_API_DEV_URL!);

const Home: NextPage = () => {
  const [text, setText] = useState<string>('');
  const sendLine = async () => {
    console.log(`${URL}${text}`);
    try {
      const response = await fetch(`${URL}${text}`);
      const data = await response.json();
      console.log('🚀 ~ file: index.tsx ~ line 11 ~ sendLine ~ data', data);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx ~ line 13 ~ sendLine ~ error', error);
    }
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>LINE message送信</h1>
        <h1>LINE message送信</h1>
        <br />
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={sendLine}>送信</button>
      </main>
    </div>
  );
};

export default Home;
