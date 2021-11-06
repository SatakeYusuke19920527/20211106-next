import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [text, setText] = useState<string>('');
  const sendLine = async () => {
    const response = await fetch(`http://localhost:3000/api/${text}`);
    const data = await response.json();
    console.log('🚀 ~ file: index.tsx ~ line 11 ~ sendLine ~ data', data);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>text</h1>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={sendLine}>送信</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by yujiro
        </a>
      </footer>
    </div>
  );
};

export default Home;
