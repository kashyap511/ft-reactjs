import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classes from './AppBar.module.scss';

export default class ButtonAppBar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className={classes.root}>
                        <Typography variant="h6" className={classes.title}>
                            Covid Karnataka Stats
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
