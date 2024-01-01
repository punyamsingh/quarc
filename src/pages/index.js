// index.js

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import supabase from '@/sb/supabase';
import Marquee from "react-fast-marquee";

export default function Home() {
  const [text,setText] = useState('');

  const handleSave = async () => {
    try {
      if (!text.trim()) {
        alert('Please enter some text before saving.');
        return;
      }

      const { data,error } = await supabase
        .from('snippets')
        .upsert([{ text }],{ returning: 'representation' });

      if (error) {
        console.error('Error saving to Supabase:',error.message);
        return;
      }

      const storedId = data[0].id;
      window.location.href = `/stored/${storedId}`;
    } catch (error) {
      console.error('Unhandled error:',error);
    }
  };

  const handleSaveAs = async () => {
    try {
      if (!text.trim()) {
        alert('Please enter some text before saving.');
        return;
      }

      const customId = prompt('Enter a custom ID:');

      if (!customId) {
        alert('Invalid custom ID. Please enter a non-empty ID.');
        return;
      }

      const { data: existingSnippet } = await supabase
        .from('snippets')
        .select('id')
        .eq('id',customId)
        .single();

      if (existingSnippet) {
        alert('A snippet with the provided ID already exists. Please choose a different ID.');
        return;
      }

      const { error } = await supabase
        .from('snippets')
        .upsert([{ id: customId,text }]);

      if (error) {
        console.error('Error saving snippet with custom ID:',error.message);
        return;
      }

      window.location.href = `/stored/${customId}`;
    } catch (error) {
      console.error('Unhandled error during save-as:',error.message);
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
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        gradient={true}
        gradientColor={[255,255,0]}
      >
        <p>//// This webapp is under contruction //// </p>
      </Marquee>
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
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button className={styles.button} onClick={handleSave}>
            Save
          </button>
          <button className={styles.button} onClick={handleSaveAs}>
            Save As
          </button>
        </div>
      </main>
    </>
  );
}
