import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import GuidingLight from './GuidingLight'

const Overview = () => {

    return (
        <div className="overview">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputLabel htmlFor="project-overview" className="tab-heading">Project Overview</InputLabel>
                    <GuidingLight 
                        title="What is the problem statement?"
                        info="In this section, share your problem statement. A problem statement is a clear, concise description of the issue (problem) you designed for in this case study. In this section you may also consider including a vision that makes way into solving the problem, such as How Might We statements, a design challenge statement, and your goals(s)."
                    />
                    <TextField
                        id="project-overview"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Overview