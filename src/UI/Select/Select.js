import React, { Component } from 'react';

import classes from './Select.module.scss';

class Select extends Component {

    render() {
        return (
            <select className={classes.select} onChange={(e) => this.props.onChange(JSON.parse(e.target.value))}>
                {this.props.options.map((option, key) => (
                    <option className={classes.option} value={JSON.stringify(option)} key={key}>
                        {option.beneficiaryName}
                    </option>
                ))}
            </select>
        )
    }
}

export default Select;