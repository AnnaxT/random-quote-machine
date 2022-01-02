import React from "react";
import { Button } from '@mui/material';


const buttonStyles = {
    color: '#fff',
}

const NewQuoteButton = ({ onClick }) => {
    return(
        <Button onClick={onClick} variant="contained" size='large' sx={buttonStyles}  >
            New Quote
        </Button>
    )
}
 
export default NewQuoteButton;