import React from 'react';
import './Ads.css';
import adImg from '../../images/adimg.png';

const Ads=()=>{
    return(
       <div className ="Ads">
        <div class="contents">
            <h2 className>Create Ads in Google and Social Media</h2>
            Utilize the biggest internet platorm such as Google,facebook and instagram to improve your custom base
            <div class= "button_div"><button>subscribe to unlock ads</button></div>
        </div>
        <div class="image">
            <img src={adImg}alt="adImage"/>
        </div>
    </div>
    )
}

export default Ads;