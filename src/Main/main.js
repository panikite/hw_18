import React from 'react';
import './main.css';

const Main = () => {
    return (
        <div className="main_wrap"> 
            <div className="main_img" style={{ backgroundImage: 'url(https://www.5.ua/media/pictures/original/189690.jpg)' }}></div>
            <h1>Hello Dog</h1>
            <p className="main_text" > Anyone who loves dogs, knows there is a lot of information you need to know in order to keep them healthy and happy. There are a lot of myths and some misinformation too. Here are some interesting facts that just may surprise you. We've tossed in some fascinating trivia too!

It is a myth that dogs are color blind. They can actually see in color, just not as vividly as humans. It is similar to our vision at dusk.

Dogs DO have better low-light vision than humans because of a special light-reflecting layer behind their retinas.

A German Shepherd guide dog led her blind companion through the entire 2100-mile Appalachian Trail.

If never spayed or neutered, a female dog, her mate, and their puppies could produce over 66,000 dogs in 6 years!

A dog's' only sweat glands are between their paw pads.</p>
        </div>
    )
}



export default Main;