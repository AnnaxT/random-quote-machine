import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import themeColors from "./themeColors";
import NewQuoteButton from './components/NewQuoteButton';
import Quote from './components/Quote';
import Container from './components/Container';
import Links from "./components/Links";
import BottomRow from "./components/BottomRow";
import { purple, blue } from '@mui/material/colors'

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';




function App() {

  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [color, setColor] = useState(themeColors[0]);
 
  const useStyles = makeStyles({
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: color
    }
  
  });


  const theme = createTheme({
    palette: {
      primary: {
        main: color
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  useEffect(() => {

    fetchRandomQuote();
    randomColor();

  },[]);

  const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * themeColors.length);
    const randomColor = themeColors[randomNumber];
    setColor(randomColor);
    console.log('color: ', randomColor);

    console.log(typeof randomColor)
  }

  const fetchRandomQuote = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const allQuotes = data.quotes;
      const randomNumber = Math.floor(Math.random() * allQuotes.length);

      setQuote(allQuotes[randomNumber].quote);
      setAuthor(allQuotes[randomNumber].author);
    })
    .catch(error => console.log('error: ', error));
 }

 const handleNewQuote = () => {
  fetchRandomQuote();
  randomColor();
 }

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
    <div className={classes.wrapper}>

      <Container id="quote-box" >
        <Quote author={author} quote={quote} id="text" />
        <BottomRow>
          <Links author={author} quote={quote} />
          <NewQuoteButton onClick = {handleNewQuote} id="new-quote"/>
        </BottomRow>
      </Container>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
