import React from "react";
import { Typography, Box } from '@mui/material';

const textStyles = {
    fontWeight: 'fontWeightLight',
    color:"primary.dark",
    p: 1,
}

const Quote = ({ quote, author }) => {
    return(
        <Box sx={{ fontWeight: 'fontWeightBold' }}  >
            <Typography id="new-quote" variant="h5" color="primary.dark" sx={textStyles} >
               "{quote}"
            </Typography>
            <Typography id="author" variant="h6" color="primary.dark" sx={{...textStyles, fontWeight: 'fontWeightRegular', p:2, textAlign: 'right' }} >
                 - {author}
            </Typography>       
        </Box>
    )
}

export default Quote;