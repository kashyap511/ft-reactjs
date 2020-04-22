import React from 'react';
import Button from '@material-ui/core/Button';

const ftButton = props => (
    <Button variant="contained" color="primary">
        {props.label}
    </Button>
);
export default ftButton;