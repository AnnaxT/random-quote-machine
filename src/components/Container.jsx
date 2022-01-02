import React from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        padding: '20px',
        [theme.breakpoints.up('lg')]: {
            width: '30vw',
        },

        [theme.breakpoints.down('lg')]: {
            width: '45vw',
        },

        [theme.breakpoints.down('md')]: {
            width: '55vw',
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