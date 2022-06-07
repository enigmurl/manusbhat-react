/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../framework/standard_template";

import "../css/home.css"

/* HOME [accessed by clicking Manu Bhat] 
 - Resume / CV
 - Small about me section
    - I like programming, and explain my college structure. 
    - I like programming.
    - I like physics as well, math, physics 
    - I'm interested in business. Strong believed in capitalism. 
    - other interests {nature, STEM, and sometimes digital art}
    - how else i spend my free time, watching documentaries, and playing video games or browsing twitter/YouTube. 
    - some of my favorites.
*/
function Home() {
    return (
        <StandardTemplate active = 'Home'> 

            {/* picture and resume and cv */}
            <section id="picture">

            </section>

            <section id="introductory-paragraph">
                {/* Introductory header */}
                <p>
                Welcome! My name is Manu Shankar Bhat {/* Button for playing my name*/} and this is my website. 
                Among other things, I'm a st.
                You can learn more about all of that right here!
                </p>

                <hr/>

                {/* Explanation of my major */}
                <p>
                Math-CS. I especially like the theoretical side of computer science. I've used it. 

                <br/>

                Business. As a strong believer in capitalism. Taking inspiration from the likes of Jassy, Musk and Bezos, I also have further interests in how entrepreneurship has shaped
                shaped our country, and have further plans. 

                <br/>

                Physics. I am interested in STEM. In comparision to other science disciplines, physics has the advantage of being
                logical and more predictable. 
                </p>

                <hr/>
                {/* Other things I'm intested in and some of my favorites */}
                <p>
                However, I also have interests Outside of college, I have other interests as well.

                <br/>

                Nature and hikes. 
                
                <br/>

                Space and rocketry. 

                <br/>
                Not everything about me is serious, though! I also like to spend my time on entertainment.

                <br/>

                Digital art. Learned it from my favorite YouTubers 3Blue1Brown. For reference, here are some of my other favorites.
                </p>
                {/* Table of my favorites */}

                {/* People: Andy Jassy, Claude Shannon, Jeff Bezos, Gwynne Shotwell, Warren Buffet, Elon Musk, and Dennis Ritchie. */}
                {/* Colors: Green #3ba557, Blue Gray #242e40, Yellow #FF0000 */}
                {/* TV Show: Avatar the Last Airbender */}
                {/* Vacation Spot: Norway (and the northern lights) */}
                {/* Sports: American Football, Frisbee, Badminton */}
                {/* Animals:  */}
                {/* Video Game Character: El Primo */}
                {/* Seal: NSA/Central Security Service */}
                {/* Airplanes: Rockwell B-1B Lancer, B748, F-22 */}
                {/* Newsletter: Quanta Magazine */}

                <hr/>
                <p>
                Thanks for visiting and I hoped you learned something about me!
                I encourage you to look into the other pages on my website, which are accesible from the top navigation bar.
                However, do note that everything here is still a work in progress. 
                Therefore, some sections may not be fully complete.
                </p> 
            </section>               
        </StandardTemplate>
    );
}

export default Home;