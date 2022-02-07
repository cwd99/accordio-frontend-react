import React from 'react'
import zap from '../../images/zap.png'
import smileFace from '../../images/smile.png'
import lightbulb from '../../images/lightbulb.png'
import { InputBase, IconButton } from '@material-ui/core'
import Cta from './cta/index'
import Filter from './Filter/index'
import accordio from '../../images/accordio.png'
import { Link } from 'react-router-dom'

<h1>Hi there!</h1>

// function LandingPage(props) {

//     // const [signedIn, setSignedIn] = useState(true)

//     if (props.signedIn) {
//         return (
//             <div className="home-page home-page-wrapper">

//                 <div className="welcome">
//                     <div className="cta-row container">
//                         <div className="column">
//                             <div className="content">
//                                 <h1>Welcome, Gabriela</h1>
//                                 <p>Explore case studies below or start creating your own with our research-based template</p>
//                                 <Link to="/create-account"><button className="blue-btn btn-filled">Create Your First Case Study</button></Link>
//                             </div>
//                         </div>
//                         <div className="column">
//                             <img src={accordio} alt="Welcome to Accordio" width="100%" className="cta-image"></img>
//                         </div>
//                     </div>
//                 </div>

//                 <Filter />

//                 <div className="featured-case-studies container">
//                     <h3><img src={zap} alt="zap icon" className="case-study-icon" /> Featured case studies</h3>
//                     <FeaturedCaseStudies />
//                 </div>

//                 <div className="browse-case-studies container">
//                     <h3><img src={smileFace} alt="smile face" className="case-study-icon" /> Browse through 1000's of case studies</h3>
//                     <BrowseCaseStudies signedIn={props.signedIn} />
//                 </div>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div className="home-page">
//                 <Cta />
//             </div>
//         )
//     }
// }