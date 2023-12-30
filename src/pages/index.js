import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>quarc</title>
        <meta name="description" content="Quick Universal Access for Retrieving Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo-transparent.png"
            alt="QUARC Logo"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className={styles.container}>
          <textarea
            className={styles.textarea}
            placeholder="Paste your code here..."
          ></textarea>
          <button className={styles.button}>Submit</button>
        </div>
      </main>
    </>
  );
}
