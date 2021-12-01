import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Context from './Context'
import Overview from './Overview'
import Process from './Process'
import Outcome from './Outcome'
import Learnings from './Learnings'
import CaseStudyButtons from './CaseStudyButtons'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            {...other}
            className="tabPanel"
        >
            <Box sx={{ width: '100%' }} className={value !== index ? 'hidden' : ''}>
                {children}
                {value !== 0 && <CaseStudyButtons />}
            </Box>
        </div>
    );
}

const CreateCaseStudy = () => {

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        window.scrollTo(0, 0)
        setValue(newValue)
    };

    return (
        <div className="create-case-study container">
            <div className="left-side">
                <Link to="/home"><div className="learn-more">&#x3c; <span> Learn more</span></div></Link>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label="Context" />
                    <Tab label="Overview" />
                    <Tab label="Process" />
                    <Tab label="Outcome" />
                    <Tab label="Learnings" />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <Context />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Overview />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Process />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Outcome />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Learnings />
            </TabPanel>
        </div>
    )
}

export default CreateCaseStudy