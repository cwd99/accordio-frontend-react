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
import AutocompleteInput from '../create-case-study/AutocompleteInput'
import ImageUpload from '../edit-tool/ImageUpload'
import { Link } from 'react-router-dom'
import AboutMe from '.'
import avatar from '../../images/Ellipse 20.png'
import NameAndAvatar from './NameAndAvatar'

const AboutMeEdit = () => {

    const [inputs, setInputs] = useState({
        based: '',
        role: [],
        industry: [],
        about_me: [],
        team: [],
        how_I_work: '',
        top_five: '',
        goals: '',
        favorite: '',
        happy_place: '',
        current_work:'',
        nda: false
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
        <div className="about_me_edit">
            <div className="name">
            <NameAndAvatar />
            </div>
            <div className="fields">
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <InputLabel htmlFor="based">Where are you based?</InputLabel>
                        
                        <TextField
                            id="based"
                            name="based"
                            variant="outlined"
                            label="City or State"
                            fullWidth
                            value={inputs.based} 
                            onChange={e => handleInputChange(e, 12)}
                        />
                        <FormHelperText className="word-count">{12 - (isNaN(inputs.based) ? inputs.based.match(/[^\s]+/g)?.length : 0)}</FormHelperText>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <InputLabel htmlFor="role">What is your role?</InputLabel>
                        <AutocompleteInput
                            id="role"
                            variant="outlined"
                            label="Your title"
                            value={inputs.role}
                            onChange={(e, newValue) => setInputs({...inputs, role: newValue})}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <InputLabel htmlFor="current_work">Where do you currently work?</InputLabel>
                        <TextField
                            id="current_work"
                            name="current_work"
                            label="Your workplace"
                            fullWidth
                            variant='outlined'
                            value={inputs.current_work}
                            onChange={e => handleInputChange(e, 25)}
                        />
                        <Typography>If you are looking for opportunities, let hiring managers know, e.g., “open for opportunities”. </Typography>
                    
                    </Grid>
                </Grid>
                

                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <InputLabel htmlFor="about-me">About Me</InputLabel>
                        <Typography>About you in two sentences (this very brief bio will appear next to your case studies)</Typography>
                        <TextField
                            id="about-me"
                            name="about-me-short"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={3}
                            value={inputs.about_me} 
                            onChange={e => handleInputChange(e, 25)}
                        />
                        {/* <FormHelperText className="word-count">{25 - (isNaN(inputs.abstract) ? inputs.abstract.match(/[^\s]+/g)?.length : 0)}</FormHelperText> */}
                    
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={7}>
                            <InputLabel htmlFor="about-me">About Me</InputLabel>
                            <Typography>About you in depth (this bio will appear on your About Me page)</Typography>

                            <Typography>What drives you to learn? What have you accomplished?</Typography>
                            <TextField
                                id="about-me"
                                name="about-me-in-depth"
                                variant="outlined"
                                fullWidth
                                multiline
                                minRows={3}
                                value={inputs.about_me} 
                                onChange={e => handleInputChange(e, 50)}
                            />
                            {/* <FormHelperText className="word-count">{50 - (isNaN(inputs.abstract) ? inputs.abstract.match(/[^\s]+/g)?.length : 0)}</FormHelperText> */}
                        
                        </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <title>How I Work</title>
                        <InputLabel htmlFor="how_I_work">How I Work</InputLabel>
                        <Typography>What are the top three industries you have experience in?</Typography>
                        
                        <TextField
                            id="how_I_work"
                            name="how_I_work"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={3}
                            value={inputs.how_I_work} 
                            onChange={e => handleInputChange(e, 100)}
                        />
                        </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <InputLabel htmlFor="top_five">Top Five</InputLabel>
                        <Typography>What are your top five skills?</Typography>
                        
                        <TextField
                            id="top_five"
                            name="top_five"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={3}
                            value={inputs.top_five} 
                            onChange={e => handleInputChange(e, 100)}
                        />
                        </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                            <InputLabel htmlFor="goals">Goals</InputLabel>
                            <Typography>What are your short term or long term learning goals? </Typography>
                            <TextField
                                id="goals"
                                name="goals"
                                variant="outlined"
                                fullWidth
                                multiline
                                minRows={3}
                                value={inputs.goals} 
                                onChange={e => handleInputChange(e, 50)}
                            />
                        </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <title>Who I Am</title>
                        <InputLabel htmlFor="favorite">Favorite</InputLabel>
                        <Typography>My favorite items on my nightstand are...</Typography>
                        <TextField
                            id="favorite"
                            name="favorite"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={3}
                            value={inputs.favorite} 
                            onChange={e => handleInputChange(e, 25)}
                        />
                        </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <InputLabel htmlFor="favorite">Happy Place</InputLabel>
                        <Typography>My happy place is...</Typography>
                        <TextField
                            id="happy_place"
                            name="happy_place"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={3}
                            value={inputs.happy_place} 
                            onChange={e => handleInputChange(e, 25)}
                        />
                        </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <title>Connect</title>
                        <TextField
                            id="twitter"
                            name="twitter"
                            variant="outlined"
                            label="Twitter"
                            fullWidth
                            value={inputs.based} 
                            onChange={e => handleInputChange(e, 12)}
                        />
                        <br/>
                        <TextField
                            id="linkedin"
                            name="linkedin"
                            variant="outlined"
                            label="LinkedIn"
                            fullWidth
                            value={inputs.based} 
                            onChange={e => handleInputChange(e, 12)}
                        />
                        <TextField
                            id="instagram"
                            name="instagram"
                            variant="outlined"
                            label="Instagram"
                            fullWidth
                            value={inputs.based} 
                            onChange={e => handleInputChange(e, 12)}
                        />
                        <TextField
                            id="medium"
                            name="medium"
                            variant="outlined"
                            label="Medium"
                            fullWidth
                            value={inputs.based} 
                            onChange={e => handleInputChange(e, 12)}
                        />
                        <TextField
                            id="spotify"
                            name="spotify"
                            variant="outlined"
                            label="Spotify"
                            fullWidth
                            value={inputs.based} 
                            onChange={e => handleInputChange(e, 12)}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default AboutMeEdit