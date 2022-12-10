import React from "react";
import { createClient } from 'pexels';


//-----------Pexels API for background image---------------
async function getImage (value) {

    const response = await fetch(`https://api.pexels.com/v1/search?query=${value}`,{
        headers: {Authorization: "563492ad6f91700001000001ff24965070704f299ee63e106f4ed677"}
    });
    
    const cityImage = await response.json();
    
    document.querySelector("body").style.backgroundImage = `url(${cityImage.photos[0].src.landscape})`
};



function BackgroundImage() {

    const bgImageApiKey = '563492ad6f91700001000001cd879a94927e49bb9e9715c99fb7ecc9'
    const client = createClient(bgImageApiKey);



    console.log("Client: ", client)

}

export default BackgroundImage