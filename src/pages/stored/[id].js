// pages/stored/[id].js
import { useEffect,useState } from 'react';
import Router from 'next/router';
import TopLoadingBar from 'react-top-loading-bar';
import supabase from '@/sb/supabase'; // Update the path to your supabase.js file
import Marquee from "react-fast-marquee";

export default function StoredPage({ storedText }) {
    const [text,setText] = useState(storedText);
    const [loadingBar,setLoadingBar] = useState(0);

    useEffect(() => {
        // Fetch stored text based on the unique ID
        const fetchStoredText = async () => {
            try {
                setLoadingBar(30); // Start loading bar
                const storedId = Router.query.id; // Use Router.query to get the ID
                console.log(storedId)
                const { data,error } = await supabase
                    .from('snippets')
                    .select('text')
                    .eq('id',storedId)
                    .single();

                if (error) {
                    console.error('Error fetching stored text:',error.message);
                    return;
                }

                setText(data.text);
                setLoadingBar(100); // Complete loading bar
            } catch (error) {
                console.error('Unhandled error:',error);
                setLoadingBar(100); // Ensure loading bar completes in case of an error
            }
        };

        fetchStoredText();
    },[]); // Ensure it runs only once on component mount

    return (
        <div>
            <TopLoadingBar progress={loadingBar} color="#0071ff" />
            <Marquee
                autoFill={true}
                pauseOnHover={true}
                gradient={true}
                gradientColor={[255,255,0]}
            >
                <p>//// This webapp is under contruction //// </p>
            </Marquee>
            <h1 style={{ textAlign: 'center' }}>Stored Page</h1>
            <pre>{text}</pre>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    // No need to fetch stored text here, it's handled in useEffect
    // ...

    return {
        props: {
            storedText: '', // Set initial value, actual value is fetched in useEffect
        },
    };
}
