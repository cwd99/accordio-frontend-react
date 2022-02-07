import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import GuidingLightImg from '../../images/guiding-light.png'

const GuidingLight = (props) => {
    return (
        <Accordion elevation={0} className="guiding-light">
            <AccordionSummary>
                <img src={GuidingLightImg} alt="guiding light" className="guiding-light-icon" /> {props.title}
            </AccordionSummary>
            <AccordionDetails>
                {props.info}
            </AccordionDetails>
        </Accordion>
    )
}

export default GuidingLight