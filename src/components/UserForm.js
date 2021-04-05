import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function UserForm(props) {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={props.handleInputChange} />
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={props.handleInputChange} />
            <br />
            <Button variant="contained" onClick={props.handleSubmit} >Submit</Button>
        </form>
    );
}