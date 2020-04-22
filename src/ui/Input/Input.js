import React from 'react';
import classes from './Input.module.scss';

const Input = props => {
    return <div >
        <input className={classes.input} {...props} onChange={e => props.onChange(e.currentTarget.value)} value={props.amount}/>
    </div>
}
export default Input;