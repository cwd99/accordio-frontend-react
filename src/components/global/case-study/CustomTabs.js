import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function CustomTabs(props) {

    let tabProps = {}

    const tabLabels = ["Context", "Overview", "Process", "Outcome", "Learnings"]

    return (
        <Tabs
            orientation="vertical"
            value={props.value}
            onChange={props.handleChange}
        >
            {tabLabels.map((label, i) => {
                if (props.component === "a") {
                    tabProps.href = `#${label}`
                }
                return (
                    <Tab label={label} key={i} {...tabProps} />
                )
            })}
        </Tabs>
    );
}

export default CustomTabs