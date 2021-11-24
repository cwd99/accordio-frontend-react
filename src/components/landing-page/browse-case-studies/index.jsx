import React, { useState } from 'react'
import caseStudyBrowse from '../../../images/case-study-browse.png'
import Grid from '@material-ui/core/Grid'

const BrowseCaseStudies = (props) => {

    const [bookmarked, setBookmarked] = useState([])

    const handleBookmark = (index) => {
        const bookmarks = new Set([...bookmarked, index])
        setBookmarked([...bookmarks])
        return bookmarks.has(index)
    }

    return (
        <>
            <Grid container spacing={0}>
                {[...Array(6)].map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <div className="case-study">
                            <div className="case-study-image">
                                <img src={caseStudyBrowse} alt="case study" width="100%"></img>
                                <span className="category-tag">Industry</span>
                            </div>
                            <div className="case-study-title">
                                <p>Social Kitchen, an app that increases your culinary confidence</p>
                                {props.signedIn ?
                                    <i className={`${bookmarked?.includes(i) ? 'fas' : 'far'} fa-bookmark`} onClick={() => handleBookmark(i)}></i>
                                    : null
                                }
                            </div>
                            <div className="case-study-description">
                                Tempus vulputate vivamus in sit metus, in. Blandit libero, consequat sed eu. Purus donec sit fusce id a auctor cursus arcu...
                            </div>
                            <div className="case-study-author-role">
                                <p className="author">Preethi Shreeya</p>
                                <p className="role">UX Designer</p>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>

            <div className="text-center">
                <button className="blue-btn btn-filled">
                    Load More
                </button>
            </div>
        </>
    )
}

export default BrowseCaseStudies;