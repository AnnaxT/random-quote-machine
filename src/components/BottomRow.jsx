import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        marginTop: 5,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',

        },
    }
}));

const BottomRow = ({ children }) => {
    const classes = useStyles();

    return(
        <div className={classes.root}> {children} </div>
    )
}

export default BottomRow;