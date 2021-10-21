import welcomeToAccordio from '../../../images/welcome-to-accordio.png'
import ctaLightBulb from '../../../images/cta-light-bulb.png'
import ctaCaseStudyTemplate from '../../../images/cta-case-study-template.png'
import ctaMail from '../../../images/cta-mail.png'
import ctaCollaboration from '../../../images/cta-collaboration.png'
import ctaCaseStudy from '../../../images/cta-case-study.png'
import { Button } from '@material-ui/core'

const Cta = () => {
    return (
        <div className="cta-section">
            <div className="cta-row container">
                <div className="column">
                    <div className="content">
                        <h1>Writing a case study?</h1>
                        <p>Confidently write discoverable case studies with guidance along the way</p>
                        <Button variant="contained" disableElevation className="get-started-btn" href="/create-account">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="column">
                    <img src={welcomeToAccordio} alt="Welcome to Accordio" width="70%" className="cta-image"></img>
                </div>
            </div>

            <div className="cta-row container">
                <div className="column">
                    <div className="content">
                        <img src={ctaLightBulb} alt="cta light bulb" width="22%" />
                        <h1>We will guide you to write a complete case study in 5 easy steps</h1>
                        <p>With our research-backed template, we guide you to highlight the most important parts of a case study.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="image">
                        <img src={ctaCaseStudyTemplate} alt="Case study template" width="70%" className="cta-image"></img>
                    </div>
                </div>
            </div>

            <div className="cta-row container">
                <div className="column">
                    <div className="content">
                        <img src={ctaMail} alt="cta light bulb" width="35%" />
                        <h1>A community through shared collaboration</h1>
                        <p>We know you're a team player, so we help you highlight your piece of the puzzle and uplift your collaborations.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="image">
                        <img src={ctaCollaboration} alt="Shared Collaboration" width="70%" className="cta-image"></img>
                    </div>
                </div>
            </div>

            <div className="cta-row container">
                <div className="column">
                    <div className="content">
                        <h1>Write case studies that hiring managers will actually read</h1>
                        <p>Our template helps hiring managers easily identify what they're looking for, and we help you show them.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="image">
                        <img src={ctaCaseStudy} alt="Case study" width="70%" className="cta-image"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cta;