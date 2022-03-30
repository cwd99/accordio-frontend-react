import React from 'react'
import zap from '../../images/zap.png'
import smileFace from '../../images/smile.png'
import lightbulb from '../../images/lightbulb.png'
import { InputBase, IconButton } from '@material-ui/core'
import accordio from '../../images/accordio.png'
import avatar from '../../images/Ellipse 20.png'
import { Link } from 'react-router-dom'

function AboutMe(props) {

    // const [signedIn, setSignedIn] = useState(true)

    if (props.signedIn) {
        return (
            <div className="home-page home-page-wrapper">

                <div className="welcome">
                    <div className="cta-row container">
                        <div className="about-me-bio">
                            
                            <div className='column' id="avatar">
                                <img src={avatar} alt="profile picture" />
                            </div>

                            </div>
                            <div className="column" id="profile">
                            Strategic UX designer, problem solver and team player. I am energized by fast-paced, collaborative 
                            environments and motivated by human-centered design. I endeavour to provide holistic, meaningful 
                            solutions for people while meeting business needs. Outside of work, I am a craft market explorer and always thinking of ways to live optimally.
                            </div>
                    </div>

                    <div className="how-I-work">
                        <h3>How I Work</h3>
                        <div className="top-industries">
                            <h4>Top Industries</h4>
                                <p>Mobile Applications</p>
                                <p>Fashion</p>
                                <p>Startups</p>

                        </div>

                        <div className="top-skills">
                            <h4>Top Skills</h4>
                                <p>Product Design</p>
                                <p>Branding</p>
                                <p>Project Management</p>
                                <p>Prototyping</p>
                                <p>Usability Testing</p>

                        </div>

                        <div className='goals'>
                            <h4>Goals</h4>
                            <p>Improving the way I give and receive design critiques, 
                               learning about motion design, and re-working my process.
                            </p>

                        </div>                    
                    </div>
                    <br/>
                    <div className="who-I-am">
                        <h3>Who I am</h3>
                        <div className="favorite-items">
                            <h4>My favorite items on my nightstand are...</h4>
                            <p>The Little Prince, probably my cat, and my glass of water she’s drinking out of.</p>
                        </div>

                        <div className="happy-place">
                            <h4>My happy place is...</h4>
                            <p>Anywhere with temperate weather, ideally cushioned with a mimosa.</p>
                        </div>

                    </div>
                </div>


                
            </div>
            // <div className='nav_and_button'>Hello There</div>
        )
    }
    else {
        return (
            <div className="home-page">
                
                {/* <h1>hi there</h1> */}
            </div>
        )
    }
}

export default AboutMe