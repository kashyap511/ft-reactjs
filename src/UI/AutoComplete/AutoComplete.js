import React, { Component } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


class AutoComplete extends Component {

    render() {

        return <Autocomplete
                    id="combo-box-demo"
                    options={this.props.options}
                    getOptionLabel={(option) => option.beneficiaryName}
                    onChange={(e, v) => this.props.onChange(v)}
                    renderOption={(option) => (
                        <div>
                            <div>
                                {option.beneficiaryName}
                            </div>
                            <div>
                                {option.beneficiaryBank?.name + ' | ' + option.beneficiaryBank?.accountNumber}
                            </div>

                        </div>
                    )}
                    renderInput={(params) => <TextField {...params} label={this.props.label} variant="outlined" />}
                />
    }
}
export default AutoComplete;