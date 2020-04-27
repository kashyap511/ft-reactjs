import React, { Component } from 'react';
import classes from './Error.module.scss';
class Error extends Component {

    render() {
        return (
            <div className={classes.section}>
                    <div className={classes.errorCode}>Oops!</div>
                    <div>
                        <span className={classes.errorDescription}>Something went wrong. Please try again later</span>
                    </div>
            </div>
        )
    }
}
export default Error;