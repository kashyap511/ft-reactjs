import React, { Component } from 'react';
import classes from './NotFound.module.scss';

class NotFound extends Component {

    render() {
        return (
            <div className={classes.section}>
                    <div className={classes.errorCode}>404</div>
                    <div>
                        <span className={classes.errorDescription}>This page is not found</span>
                    </div>
            </div>
        )
    }
}
export default NotFound;