// index.js

import { useState } from 'react';  // Import the useState hook
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import supabase from '@/sb/supabase'; // Update the path to your supabase.js file

export default function Home() {

  const [text,setText] = useState('');  // Add a state variable for the textarea value

  // const handleSave = async (text) => {
  //   // Save text to Supabase
  //   const { data,error } = await supabase
  //     .from('snippets')
  //     .insert([{ text },])
  //     .select();

  //   if (error) {
  //     console.error('Error saving to Supabase:',error.message);
  //     return;
  //   }

  //   // Redirect to the stored page with the unique id
  //   const storedId = data[0].id;
  //   window.location.href = `/stored/${storedId}`;
  // };

  const handleSave = async () => {
    try {
      // Save text to Supabase
      const { data,error } = await supabase
        .from('snippets')
        .insert([{ text },])
        .select();

      if (error) {
        console.error('Error saving to Supabase:',error.message);
        return;
      }

      // Redirect to the stored page with the unique id
      const storedId = data[0].id;
      window.location.href = `/stored/${storedId}`;
    } catch (error) {
      console.error('Unhandled error:',error);
    }
  };

  return (
    <>
      <Head>
        <title>quarc</title>
        <meta name="description" content="Quick Universal Access for Retrieving Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
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
            value={text}
            onChange={(e) => setText(e.target.value)}  // Update the state on change
          ></textarea>
          <button className={styles.button} onClick={handleSave}>
            Save
          </button>
        </div>
      </main>
    </>
  );
}
