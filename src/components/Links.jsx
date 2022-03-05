import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const iconStyles = {
    fontSize: 50,
    margin: 1,
    color: 'primary.main',
    "&:hover": {
        color: 'primary.dark',
        transform: 'scale(1.1)',
        transition: '1s color, 1s transform',
    },

};

const Links = ({ quote, author }) => {


    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${quote}" - ${author}`
      )}&hashtags=quotes`;

    const facebookLink = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    return (
        <div>
        <a id="tweet-quote" href={ twitterLink } style={{ textDecoration: 'none'}}>
                <TwitterIcon sx= {iconStyles} />
        </a>
        <a  id="facebook-quote" href= {facebookLink} style={{ textDecoration: 'none'}} >
                <FacebookIcon sx= {iconStyles}  />
        </a>
        </div>
    )
};

export default Links;