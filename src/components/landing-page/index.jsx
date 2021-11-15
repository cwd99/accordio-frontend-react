import React from 'react'
import zap from '../../images/zap.png'
import smileFace from '../../images/smile.png'
import lightbulb from '../../images/lightbulb.png'
import { InputBase, IconButton, Button } from '@material-ui/core'
import Cta from './cta/index'
import Filter from './Filter/index'
import FeaturedCaseStudies from './featured-case-studies'
import BrowseCaseStudies from './browse-case-studies'
import accordio from '../../images/accordio.png'

function LandingPage(props) {

    // const [signedIn, setSignedIn] = useState(true)

    if (props.signedIn) {
        return (
            <div className="home-page home-page-wrapper">

                <div className="welcome">
                    <div className="cta-row container">
                        <div className="column">
                            <div className="content">
                                <h1>Welcome, Gabriela</h1>
                                <p>Explore case studies below or start creating your own with our research-based template</p>
                                <Button variant="contained" disableElevation className="get-started-btn">
                                    Create Your First Case Study
                                </Button>
                            </div>
                        </div>
                        <div className="column">
                            <img src={accordio} alt="Welcome to Accordio" width="100%" className="cta-image"></img>
                        </div>
                    </div>
                </div>

                <Filter />

                <div className="featured-case-studies container">
                    <h3><img src={zap} alt="zap icon" className="case-study-icon" /> Featured case studies</h3>
                    <FeaturedCaseStudies />
                </div>

                <div className="browse-case-studies container">
                    <h3><img src={smileFace} alt="smile face" className="case-study-icon" /> Browse through 1000's of case studies</h3>
                    <BrowseCaseStudies signedIn={props.signedIn} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="home-page">
                <Cta />
                <div className="check-latest">
                    <h1>Check out Accordio's latest case studies</h1>
                    <p>Discover the breadth of work from our community and how they apply their process, all using Accordio's research driven format.</p>
                    <Filter />
                </div>
                <div className="search-bar">
                    <InputBase
                        placeholder="Search for everything case studies here"
                        inputProps={{ 'aria-label': 'search for everything case studies here' }}
                    />
                    <IconButton type="submit" aria-label="search">
                        <i className="fas fa-search"></i>
                    </IconButton>
                </div>

                <div className="browse-case-studies container">
                    <h3><img src={zap} alt="zap icon" className="case-study-icon" /> Latest case studies</h3>
                    <BrowseCaseStudies signedIn={props.signedIn} />
                </div>

                <div className="footer-cta">
                    <img src={lightbulb} alt="lightbulb" />
                    <div className="footer-cta-content">
                        <p>Our mission is to provide the right space, tools and guidance to our UX community</p>
                        <Button variant="contained" disableElevation className="get-started-btn" href="/create-account">
                            Get Started
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default LandingPage