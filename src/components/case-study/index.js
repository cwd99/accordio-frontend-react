import React, { useState } from 'react'
import CustomTabs from '../global/case-study/CustomTabs'
import avatar from '../../images/avatar.png'
import Avatar from '@material-ui/core/Avatar'
import BrowseCaseStudies from '../global/browse-case-studies'
import { useParams } from "react-router-dom"
import coverPhoto from './images/coverPhoto.png'
import RelatedCaseStudies from '../global/related-case-studies'
import { Link } from 'react-router-dom'

const CaseStudy = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const { user, title, id } = useParams();

    return (
        <div className="case-study-container">
            <div className="case-study-image">
                <img src={coverPhoto} height="384" width="100%" />
            </div>
            <div className="case-study-content container">
                <div className="left-side tabs">
                    <div className="author-container">
                        <p>Author</p>
                        <div className="author">
                            <Avatar src={avatar} className="avatar" style={{ width: 60, height: 60 }} />
                            <div>
                                <a href="/preethi" className="name">Preethi Shreeya</a>
                                <p className="role">UX Researcher</p>
                            </div>
                        </div>
                        <button className="blue-btn btn-filled btn-small">Follow</button>
                    </div>
                    <CustomTabs component="a" value={value} handleChange={handleChange} />
                </div>
                <div>
                    <h1 className="case-study-title">Social Kitchen</h1>

                    <p className="case-study-author">By <a href="/preethi" className="name">Preethi Shreeya</a> on <a href="/health-and-wellness">Health and Wellness</a></p>

                    <p className="case-study-published-date">1 April 2021</p>

                    <div id="Context" className="abstract section">
                        <h1 className="heading">ABSTRACT</h1>
                        <p className="description">Cooking at home versus ordering or eating out. For most of us, it's a choice we face weekly, sometimes even daily. Lack of time, resources and even skills deter us from cooking at home, even though it saves us money and is abundantly better for our health (depending on what we choose to make). I set-out to create an app to assist and nurture the inner cook in all of us, while answering the problems that many grapple with: ordering for convenience over the sake of our pocket and furthermore wellbeing, while also developing a connection between us and food.</p>
                    </div>

                    <div className="role-team-tools section">
                        <div className="role">
                            <h3>Role</h3>
                            <p>UX Researcher</p>
                        </div>
                        <div className="team">
                            <h3>Team</h3>
                            <p>Jenna Ann</p>
                            <p>Veronica García</p>
                            <p>Davide Pine</p>
                        </div>
                        <div className="tools">
                            <h3>Tools</h3>
                            <p>Trello</p>
                            <p>Figma</p>
                        </div>
                    </div>

                    <div className="overview section" id="Overview">
                        <h1 className="heading">Overview</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                    <div className="process section" id="Process">
                        <h1 className="heading">Process</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                    <div className="outcome section" id="Outcome" >
                        <h1 className="heading">Outcome</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                    <div className="learnings section" id="Learnings">
                        <h1 className="heading">Learnings</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>

                </div>
            </div>

            <hr className="divider" />

            <div className="more-from-user container">
                <h3>More from Preethi <Link to="/preethi/case-studies" className="view-all">View All</Link></h3>
                <BrowseCaseStudies count={3} signedIn={true} fromUser={true} />
            </div>

            <div className="related-case-studies container">
                <h3>Related Case Studies</h3>
                <RelatedCaseStudies />
            </div>

        </div>
    )
}

export default CaseStudy