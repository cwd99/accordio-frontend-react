import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete';
import avatar from '../../images/avatar.png'
import { makeStyles } from '@material-ui/core/styles'
import { createFilterOptions } from '@material-ui/lab/Autocomplete';

const role = [
    'UX Designer', 'UX/UI Designer', 'UX Researcher'
]

const industry = [
    'Mobile Applications', 'Mobile Commerce', 'Mobile Games'
]

const tools = [
    'Figma', 'Micro', 'Mural'
]

const team = [
    { 'image': avatar, 'name': '@andreaw' },
    { 'image': avatar, 'name': '@andrew' },
    { 'image': avatar, 'name': '@andy' }
]

const AutocompleteInput = (props) => {

    const [options] = useState({ role, industry, tools, team })

    const [currentValue, setCurrentValue] = useState("")

    const handleInputChange = (e, val, reason) => {
        setCurrentValue(val)
        if (reason === "reset") {
            setCurrentValue("")
        }
    }

    const useStyles = makeStyles((theme) => ({
        avatar: {
            'margin-right': theme.spacing(1.5)
        }
    }));

    const classes = useStyles();

    const filterOptions = createFilterOptions({
        stringify: (option) => typeof(option) == 'object' ? option.name : option,
    });

    return (
        <Autocomplete
            multiple
            id={props.id}
            options={options[props.id]}
            disableClearable
            forcePopupIcon={false}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                />
            )}
            getOptionLabel={(option) => typeof(option) == 'object' ? option.name : option}
            filterOptions={filterOptions}
            renderOption={(props, option) => (
                <li {...props}>
                    {typeof(option) == 'object' ?
                        <>
                            <img
                                loading="lazy"
                                width="20"
                                src={option.image}
                                alt={option.name}
                                className={classes.avatar}
                            />
                            {option.name}
                        </>
                    : option}
                </li>
            )}
            size='small'
            filterSelectedOptions
            disablePortal
            open={currentValue.length >= 1}
            value={props.value}
            onChange={props.onChange}

            inputValue={currentValue}
            onInputChange={(e, val, reason) => handleInputChange(e, val, reason)}
        />
    )
}

export default AutocompleteInput