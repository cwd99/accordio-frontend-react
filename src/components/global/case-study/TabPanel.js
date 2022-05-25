import Box from '@material-ui/core/Box'
import CaseStudyButtons from '../../create-case-study/CaseStudyButtons'

function TabPanel(props) {
    const { children, value, index, hide, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            {...other}
            className="tabPanel"
        >
            <Box sx={{ width: '100%' }} className={value !== index && hide ? 'hidden' : ''}>
                {children}
                {value !== 0 && <CaseStudyButtons />}
            </Box>
        </div>
    );
}

export default TabPanel