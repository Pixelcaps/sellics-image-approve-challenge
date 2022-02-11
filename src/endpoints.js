import React from 'react';
import axios from 'axios';

/* For the random photo endpoint I concatenated a random string param
at the end due to the fact that the browser kept 'helping me' and returning a cached response.
The random string at the end is used for cache busting
From what I found online, there is fix for this at the API level from Unsplash.
*/

export const getRandomUnsplashPhoto = async () => {
    const randomString = (Math.random() + 1).toString(36).substring(7);

    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?${randomString}`, {
            headers: 
                {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    Expires: '0',
                }
            });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}