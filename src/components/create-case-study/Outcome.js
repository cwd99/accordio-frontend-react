import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import GuidingLight from './GuidingLight'

const Outcome = () => {

    return (
        <div className="outcome">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputLabel htmlFor="outcome" className="tab-heading">Outcome</InputLabel>
                    <GuidingLight 
                        title="What was the final outcome of your project?"
                        info="In this section, you should discuss the impact of your solution to your problem statement. This is a good place to showcase a prototype, final shots of your design, or a link to the final product if such exists."
                    />
                    <TextField
                        id="outcome"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Outcome