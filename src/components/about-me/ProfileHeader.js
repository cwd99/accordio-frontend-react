import React from 'react'
import { Link } from 'react-router-dom'

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <div class="flex">
                <div class="name">Gabriela Garcia</div>
                <div class="pronouns">She/her/hers</div>
            </div>
            <div class="bottom">
                <div className="left">
                    <div class="flex">
                        <div class="role">Junior UX Designer at UScreen</div>
                        <div class="location">Oakland, CA, USA</div>
                    </div>
                </div>
                <div className="right">
                    <ul class="links-list">
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/about-me">About Me</Link></li>
                        <li><Link to="/my-library">My Library</Link></li>
                        <button className="blue-btn btn-filled btn-small">Edit Profile</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader