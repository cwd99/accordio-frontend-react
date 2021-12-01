import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import GuidingLight from './GuidingLight'

const Process = () => {

    return (
        <div className="process">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputLabel htmlFor="process" className="tab-heading">The Process</InputLabel>
                    <GuidingLight 
                        title="What is your process for finding solutions to your problem statement?"
                        info={<>This section should include insights you gathered from any research you may have conducted, personas, ideations, iterations, and any obstacles you faced along the way. Keep in mind that readers want to know the <b>why</b> behind your process, and how you empathized with your users in your design iterations.</>}
                    />
                    <TextField
                        id="process"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Process