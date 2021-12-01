import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import GuidingLight from './GuidingLight'

const Learnings = () => {

    return (
        <div className="learnings">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputLabel htmlFor="takeaways" className="tab-heading">Takeaways</InputLabel>
                    <GuidingLight
                        title="What did you learn? What would you have done differently? What are the future steps?"
                        info={`This is a section where you can summarize the most important parts about your case study, the key points that you want your readers to remember. It should help readers understand what your case study is about "at a glance."`}
                    />
                    <TextField
                        id="takeaways"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Learnings