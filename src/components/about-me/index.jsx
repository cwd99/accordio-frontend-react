import React from 'react'
import zap from '../../images/zap.png'
import smileFace from '../../images/smile.png'
import lightbulb from '../../images/lightbulb.png'
import { InputBase, IconButton } from '@material-ui/core'
import accordio from '../../images/accordio.png'
import { Link } from 'react-router-dom'

function AboutMe(props) {

    // const [signedIn, setSignedIn] = useState(true)

    if (props.signedIn) {
        return (
            // <div className="home-page home-page-wrapper">

            //     <div className="welcome">
            //         <div className="cta-row container">
            //             <div className="column">
            //                 <div className="content">
            //                     <h1>Welcome back  home, Gabriela</h1>
            //                     <p>Explore case studies below or start creating your own with our research-based template</p>
            //                     <Link to="/create-account"><button className="blue-btn btn-filled">Create Your First Case Study</button></Link>
            //                 </div>
            //             </div>
            //             <div className="column">
            //                 <img src={accordio} alt="Welcome to Accordio" width="100%" className="cta-image"></img>
            //             </div>
            //         </div>
            //     </div>

                
            // </div>
            <div className='nav_and_button'>Hello There</div>
        )
    }
    else {
        return (
            <div className="home-page">
                
                <h1>hi there</h1>
            </div>
        )
    }
}

export default AboutMe