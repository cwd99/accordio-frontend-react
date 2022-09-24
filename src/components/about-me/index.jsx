import React from 'react'
import avatar from '../../images/Ellipse 20.png'
import ProfileHeader from './ProfileHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {

    return (
        <div className="about-me container">
            <ProfileHeader />

            <div className="bio">
                <div className="flex">
                    <div className="image">
                        <img src={avatar} alt="Your Avatar" />
                    </div>
                    
                    <div class="box">
                        <p>
                            Strategic UX designer, problem solver and team player.
                            <br /><br />
                            I am energized by fast-paced, collaborative environments and motivated by human-centered design. I endeavour to provide holistic, meaningful solutions for people while meeting business needs.
                            <br /><br />
                            Outside of work, I am a craft market explorer and always thinking of ways to live optimally.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="how-i-work">
                <div className="heading">How I work</div>

                <div className="flex">
                    <div class="box">
                        <p className="heading">Top Industries</p>

                        <ul>
                            <li>Mobile Applications</li>
                            <li>Fashion</li>
                            <li>Startups</li>
                        </ul>
                    </div>

                    <div class="box">
                        <p className="heading">Top Skills</p>

                        <ul>
                            <li>Product Design</li>
                            <li>Branding</li>
                            <li>Project Management</li>
                            <li>Prototyping</li>
                            <li>Usability Testing</li>
                        </ul>
                    </div>

                    <div class="box">
                        <p className="heading">Goals</p>

                        <p>Improving the way I give and receive design critiques, learning about motion design, and re-working my process.</p>
                    </div>
                </div>
            </div>

            <div className="who-i-am">
                <div className="heading">How I work</div>

                <div className="flex">
                    <div class="box">
                        <p className="heading">My favorite items on my nightstand are...</p>

                        <p>The Little Prince, probably my cat, and my glass of water she’s drinking out of.</p>
                    </div>

                    <div class="box">
                        <p className="heading">My happy place is...</p>

                        <p>Anywhere with temperate weather, ideally cushioned with a mimosa.</p>
                    </div>
                </div>
            </div>

            <div className="connect">
                <div className="heading">Connect</div>

                <div class="box">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} /> 
                            <span className="social">@gabrielagarcia</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span className="social">linkedin.com/in/gabrielagarcia</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AboutMe