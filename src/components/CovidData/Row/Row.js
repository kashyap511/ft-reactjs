import React, { Component } from 'react';
import classes from './Row.module.scss';

export default class Row extends Component {

    render() {
        return (
            <div className={(this.props.header ? classes.header : classes.row)}>
                <div className={classes.district}>
                    {this.props.dist.name}
                </div>
                <div className={classes.data}>
                    {this.props.dist.confirmed}
                </div>
                <div className={classes.data}>
                    {this.props.dist.recovered}
                </div>
                <div className={classes.data}>
                    {this.props.dist.deceased}
                </div>
                <div className={classes.data}>
                    {this.props.dist.active}
                </div>
            </div>
        )
    }
}