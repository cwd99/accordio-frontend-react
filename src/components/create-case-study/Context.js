import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import GuidingLight from './GuidingLight'
import AutocompleteInput from './AutocompleteInput'
import ImageUpload from '../edit-tool/ImageUpload'
import { Link } from 'react-router-dom'

const Context = () => {

    const [inputs, setInputs] = useState({
        title: '',
        role: [],
        industry: [],
        tools: [],
        team: [],
        abstract: '',
        client: '',
        nda: false,
        timeline: ''
    });

    const handleInputChange = (event, maxLength=null) => {
        const name = event.target.name
        let value = event.target.value
        if (maxLength >= 1) {
            let words = []
            words = value.split(/\b\s+/).slice(0, maxLength)
            value = words?.join(" ")
        }
        if (name === 'nda') {
            value = event.target.checked || false
        }
        setInputs(inputs => ({...inputs, [name]: value}))
    }

    return (
        <div className="context">
            <ImageUpload />
            <div className="fields">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="case-study-title">Case Study Title</InputLabel>
                        <TextField
                            id="case-study-title"
                            name="title"
                            variant="outlined"
                            fullWidth
                            value={inputs.title} 
                            onChange={e => handleInputChange(e, 12)}
                        />
                        <FormHelperText className="word-count">{12 - (isNaN(inputs.title) ? inputs.title.match(/[^\s]+/g)?.length : 0)}</FormHelperText>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="role">What was your role?</InputLabel>
                        <AutocompleteInput 
                            id="role"
                            value={inputs.role}
                            onChange={(e, newValue) => setInputs({...inputs, role: newValue})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="industry">What was the industry?</InputLabel>
                        <AutocompleteInput 
                            id="industry"
                            value={inputs.industry}
                            onChange={(e, newValue) => setInputs({...inputs, industry: newValue})}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="tools">What tools did you use in the creation of this project?</InputLabel>
                        <AutocompleteInput 
                            id="tools"
                            value={inputs.tools}
                            onChange={(e, newValue) => setInputs({...inputs, tools: newValue})}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="team">Who was in your team?</InputLabel>
                        <AutocompleteInput 
                            id="team"
                            value={inputs.team}
                            onChange={(e, newValue) => setInputs({...inputs, team: newValue})}
                        />
                        <Typography>Did you work with someone not on Accordio? <Link to="/" className="send-invite">Send them an invite.</Link></Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="abstract">Project Abstract</InputLabel>
                        <GuidingLight 
                            title="What to include in an abstract?"
                            info="An abstract is a summary of all the major aspects of your entire case study. It should include the overall purpose and the problem you designed for, how you tackled said problem for your users, and the key results or outcomes of your project."
                        />
                        <TextField
                            id="abstract"
                            name="abstract"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={3}
                            value={inputs.abstract} 
                            onChange={e => handleInputChange(e, 100)}
                        />
                        <FormHelperText className="word-count">{100 - (isNaN(inputs.abstract) ? inputs.abstract.match(/[^\s]+/g)?.length : 0)}</FormHelperText>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Accordion elevation={0} className="client-timeline-accordion">
                            <AccordionSummary expandIcon={<i className="fas fa-angle-down"></i>}>
                                Add your client and timeline of the project
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <InputLabel htmlFor="client">Client</InputLabel>
                                        <TextField
                                            id="client"
                                            name="client"
                                            variant="outlined"
                                            fullWidth
                                            value={inputs.client}
                                            onChange={handleInputChange}
                                        />
                                        <FormControlLabel 
                                            label={<Typography>Stay under NDA / Can't tell</Typography>}
                                            control={<Checkbox checked={inputs.nda} color="primary" name="nda" onChange={handleInputChange} />} 
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <InputLabel htmlFor="timeline">Timeline</InputLabel>
                                        <TextField
                                            id="timeline"
                                            name="timeline"
                                            variant="outlined"
                                            fullWidth
                                            value={inputs.timeline}
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Context