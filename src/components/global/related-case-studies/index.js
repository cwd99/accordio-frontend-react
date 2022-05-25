import React from 'react'
import caseStudyBrowse from '../../../images/case-study-browse.png'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const RelatedCaseStudies = (props) => {
    return (
        <Grid container spacing={4}>
            {[...Array(props.count || 8)].map((item, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                    <Link to="">
                        <div className="case-study">
                            <div className="case-study-image">
                                <img src={caseStudyBrowse} alt="case study" width="76" height="76" ></img>
                            </div>
                            <div className="case-study-info">
                                <div className="case-study-title">Redesign of a Canadian Lifestyle App</div>
                                <div className="case-study-author">Felipe Sepero</div>
                                <div className="case-study-description">
                                    Redesigning Drop, a Canadian deal service.
                                </div>
                            </div>
                        </div>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default RelatedCaseStudies