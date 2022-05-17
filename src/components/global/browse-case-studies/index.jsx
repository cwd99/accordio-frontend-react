import React, { useState } from 'react'
import caseStudyBrowse from '../../../images/case-study-browse.png'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const BrowseCaseStudies = (props) => {

    const [bookmarked, setBookmarked] = useState(new Set([]))

    const handleBookmark = (index) => {
        if (bookmarked.has(index)) {
            bookmarked.delete(index)
        }
        else {
            bookmarked.add(index)
        }
        setBookmarked(new Set(bookmarked))
    }

    console.log(props.count)

    return (
        <>
            <Grid container spacing={4}>
                {[...Array(props.count || 6)].map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <div className="case-study">
                            <Link to="/preethi/social-kitchen-an-app-that-increases">
                                <div className="case-study-image">
                                    <img src={caseStudyBrowse} alt="case study" width="100%"></img>
                                    <span className="category-tag">Industry</span>
                                </div>
                            </Link>
                            <div className="case-study-title">
                                <Link to="/preethi/social-kitchen-an-app-that-increases">
                                    <p>Social Kitchen, an app that increases your culinary confidence</p>
                                </Link>
                                {props.signedIn ?
                                    <i className={`${bookmarked?.has(i) ? 'fas' : 'far'} fa-bookmark`} onClick={() => handleBookmark(i)}></i>
                                    : null
                                }
                            </div>
                            <Link to="/preethi/social-kitchen-an-app-that-increases">
                                <div className="case-study-description">
                                    Tempus vulputate vivamus in sit metus, in. Blandit libero, consequat sed eu. Purus donec sit fusce id a auctor cursus arcu...
                                </div>
                                {props.fromUser ? null :
                                    <div className="case-study-author-role">
                                        <p className="author">Preethi Shreeya</p>
                                        <p className="role">UX Designer</p>
                                    </div>
                                }
                            </Link>
                        </div>
                    </Grid>
                ))}
            </Grid>

            {props.fromUser ? null :
            <div className="text-center">
                <button className="blue-btn btn-filled">
                    Load More
                </button>
            </div>
            }
        </>
    )
}

export default BrowseCaseStudies;