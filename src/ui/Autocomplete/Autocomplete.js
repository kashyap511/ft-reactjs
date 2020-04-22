import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import classes from './Autocomplete.module.scss';

const AutoComplete = (props) => {

    useEffect(() => { }, [props.options]);

    const onChange = (value) => {
        console.log('Changed autocomplete', value);
    }
    return (
            <Autocomplete
                options={props.options}
                onChange={(event, value) => props.onChange(value)}
                getOptionLabel={(option) => (option.beneficiaryName + ' | ' + option.beneficiaryBank.accountNumber)}
                classes={classes}
                renderInput={(params) => <TextField {...params} label="Select account" margin="normal" />}
                renderOption={(option) => (
                    <div>
                        <div className={classes.firstLevel}>{option.beneficiaryName}</div>
                        <div className={classes.secondLevel}>{option.beneficiaryBank.name}</div>
                        <div className={classes.thirdLevel}>
                        {option.beneficiaryBank.accountNumber + ' | ' + option.beneficiaryBank.city} 
                        </div>
                    </div>
                  )}
            />);
}

export default AutoComplete;
