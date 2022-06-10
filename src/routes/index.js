/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../framework/standard_template";

import "../css/index.css"
import Section from "../framework/section";

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
function playName() {
    const name = document.getElementById("name-audio");
    name.play();
}

function Home() {

    return (
        <StandardTemplate active = 'Home'> 

            <Section id="about-me" name="About me">
                <audio id ="name-audio">
                    <source src="/mp3/name.mp3" type="audio/mpeg"/>
                </audio>

                <div id = "picture-section">
                    <img id = "picture" alt = "Manu Bhat" src="/img/manu.webp"/>

                    <a id="resume-button" href="/pdf/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <p>Resume</p>
                    </a>

                </div>
                

                <div id="introductory-paragraph">
                    {/* Introductory header, done */}
                    <p> 
                    Welcome! My name is Manu Bhat 
                    {/* Button for playing my name*/} 
                    <button id ='name-pronounciation' onClick={playName}>
                        <img alt='speaker' src="/img/speaker.webp"/>
                    </button>
                    and this is my website. 
                    Among other things, I'm a student studying at UC San Diego, a developer looking to improve society, and an explorer understanding the world around me.
                    You can learn more about all of that right here!
                    </p>

                    {/* Education */}
                    <hr className="home-separator"/>

                    {/* Explanation of my major */}
                    <p>
                    Growing up in Silicon Valley, I have been exposed to an innovative and risk-taking spirit since I was a young boy. Throughout the same time period,
                    I took interest in problem solving subjects in school. Topics like Machine Learning, Robotics, and Graph Theory began to capture to my passion. 
                    Mixing all of these together, choosing Mathematics and Computer Science to be my major came as a natural decision.
                    I especially like the theoretical side of computer science due to its mysterious beauty, though I partake in practical projects as well.

                    <br/>
                    <br/>

                    A strong education, like anything, requires diversity. Therefore, I plan to supplement my studies with a minor in Business.
                    I understand the value entrepreneurs have brought to our country. Moreover, I am a strong believer in the capitalist economic model. 
                    With my first minor, I hope to learn how busineses are run and how people can be managed to produce things of value.

                    <br/>
                    <br/>

                    If you couldn't tell already, I'm heavily interested in STEM. As such, my second minor will be in Physics. In comparision to 
                    other science disciplines, physics has the advantage of being logical and predictable. Within this subject I don't really have one favorite subfield; 
                    astrophysics and quantum mechanics excite me equally.
                    </p>

                    {/* Other things I'm intested in and some of my favorites */}
                    <hr className="home-separator"/>
                    <p>
                    Of course, I have interests that live outside the classroom.

                    <br/>
                    <br/>

                    I enjoy nature and the outdoors. In particular, my family and I go hiking on the weekends. We occasionally watch documentaries
                    like Planet Earth together. Finally, I also go swinging in nearby parks.
                    
                    <br/>
                    <br/>

                    Although I've never seen a rocket launch in-person before, I did visit Kennedy Space Center when I was a child.
                    This culminated in my love for spaceflight and the cosmos. Seeing pictures of distant nebula and galaxies has always left me star struck.
                    In general, I try to stay up to date on the latest scientific developments that go on in the aerospace industry.

                    <br/>
                    <br/>

                    Not everything about me is serious, though! A good chunk of my day is spent on Twitter, YouTube, Discord and other internet mediums.
                    I also play video games like Brawl Stars.

                    <br/>
                    <br/>

                    While my art skills are far from being those of a prodigy, I still dip my toes into digital art from time to time. Anything from
                    video editing to graphic design is on the table. One particularly unique form I am well wersed in is mathematical animation, which 
                    I learned from my favorite YouTuber 3Blue1Brown. For reference, here are some of my other favorites:
                    </p>
                    {/* People: Andy Jassy, Claude Shannon, Jeff Bezos, Gwynne Shotwell, Warren Buffet, Elon Musk, and Dennis Ritchie. */}
                    {/* Video Game Character: El Primo */}
                    {/* TV Show: Avatar the Last Airbender */}
                    {/* Newsletter: Quanta Magazine */}
                    {/* Vacation Spot: Norway (and the northern lights) */}
                    {/* Colors: Green #3ba557, Blue Gray #242e40, Yellow #FF0000 */}
                    {/* Animals: Peregrine Falcon, Hummingbird */}
                    {/* Airplanes: Rockwell B-1B Lancer, B748, F-22 */}
                    {/* Sports: American Football, Frisbee, Badminton */}
                    {/* Seal: Central Security Service */}
                    <table className="favorites">
                        <tbody>
                            <tr>
                                <td className="favorite-label">People</td>
                                <td>Andy Jassy, Claude Shannon, Jeff Bezos, Gwynne Shotwell, Warren Buffet, Elon Musk, Dennis Ritchie</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Video Game Character</td>
                                <td>El Primo</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">TV Show</td>
                                <td>Avatar the Last Airbender</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Newsletter</td>
                                <td>Quanta Magazine</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Vacation Spot</td>
                                <td>Norway (I'm yet to be there though)</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Color</td>
                                <td> <p id = "color-value">Green (#3ba557)</p> It looks better on white...</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Animals</td>
                                <td>Hummingbird, Peregrine Falcon</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Airplanes</td>
                                <td>Rockwell B-1B Lancer, B748, F-22</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Sports</td>
                                <td>American Football, Frisbee, Badminton</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Seal</td>
                                <td>Central Security Service</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Table of my favorites */}

                   
                    <p>
                    And while I'm at it, I'd like to reiterate on some of my values:
                    </p>

                    <table className="favorites">
                        <tbody>
                            <tr>
                                <td className="favorite-label">Integrity</td>
                                <td>Fundamental to a functioning society is the idea that people are honest and act in accordance to the greater good</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Accountability</td>
                                <td>Those that commit grievances against others should be rightfully punished, no matter the effort it takes to get to that point</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Individuality</td>
                                <td>As long as someone does not harm others, he or she is free to do whatever they want without any judgement</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Merit</td>
                                <td>As much as possible, success and self-progression should come solely as a result from one's own decisions and hard work (as opposed to environmental factors)</td>
                            </tr>
                            <tr>
                                <td className="favorite-label">Long-Term Thinking</td>
                                <td>If an action causes a short-term disturbance in exchange for long-term prosperity, that action should always be taken </td>
                            </tr>
                        </tbody>
                    </table>

                    <hr className="home-separator"/>
                    <p>
                    Thanks for visiting and I hoped you learned something about me!
                    I encourage you to look into the other pages on my website, which are accesible from the top navigation bar.
                    However, do note that everything here is still a work in progress. 
                    Therefore, some sections may not be fully complete.
                    </p> 
                </div>
            </Section>
            
        </StandardTemplate>
    );
}

 
export default Home;