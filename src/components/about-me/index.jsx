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
                        <div className="name_and_avatar">
                            
                        <div className="column" id="profile">
                                <div className='column' id="avatar_edit">
                                    <img src={avatar} alt="profile picture" />
                                    <div className='edit'>
                                        <a href='Change photo'>Change photo</a>
                                        <br/>
                                        <a href='Remove photo'>Remove current</a>
                                    </div>                                 
                                </div>
                                        <div className='name_and_edit'>
                                            <span>Gabriela Garcia</span>
                                            <a href='edit_name'>Edit name</a>
                                        </div>
                                        <div className='name_and_pronouns'>
                                            <span>She/Her/Hers</span>
                                            <a href='edit_pronouns'>Edit</a>
                                        </div>
                                </div>
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