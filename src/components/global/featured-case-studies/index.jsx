import caseStudyFeatured from '../../../images/case-study-featured.png'
import { Grid } from '@material-ui/core'

const FeaturedCaseStudies = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
                <div className="case-study">
                    <div className="case-study-image">
                        <img src={caseStudyFeatured} alt="case study" width="100%"></img>
                        <span className="category-tag">Health and Wellness</span>
                    </div>
                    <div className="case-study-title">
                        <p>Social Kitchen, an app that increases your culinary confidence</p>
                    </div>
                    <div className="case-study-author-role">
                        <p className="author">Preethi Shreeya</p>
                        <p className="role">UX Designer</p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default FeaturedCaseStudies;