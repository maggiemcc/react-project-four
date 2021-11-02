import * as React from 'react';
import axios from 'axios';

const BreakingBadContext = React.createContext({
  characters: [],
  quotes: [],
})

export const BreakingBadContextProvider = (props) => {
  const [characters, setCharacters] = React.useState([]);
  const [quotes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    const fetchBreakingBad = async () => {
      const charactersURL = `/.netlify/functions/breakingBad`
      const quotesURL = "https://www.breakingbadapi.com/api/quotes"

      try {
        const charactersResponse = await axios.get(charactersURL);
        const characters = await charactersResponse.data;
        setCharacters(characters);

        const quotesResponse = await axios.get(quotesURL);
        const quotes = await quotesResponse.data;
        setQuotes(quotes);
      } 
      catch (error) {
        console.log(error)
      }
    }
    fetchBreakingBad()
  }, [])

  return (
    <BreakingBadContext.Provider value={{
      characters,
      quotes,
    }}>
      {props.children}
    </BreakingBadContext.Provider>
  )
}

export const useBreakingBadContext = () => React.useContext(BreakingBadContext)