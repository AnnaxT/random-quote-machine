import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        padding: '35px',
        [theme.breakpoints.up('md')]: {
            width: '550px',
        },

        [theme.breakpoints.down('md')]: {
            width: '70vw',
        },

        [theme.breakpoints.down('sm')]: {
            width: '100vw',
        },
   
    }
}));

const Container = ({ children }) => {


    const classes = useStyles();
    return(
        <Paper elevation={20} className={classes.root}>
            {children}
        </Paper>
    )
}

export default Container;