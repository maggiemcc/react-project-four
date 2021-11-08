import * as React from 'react';
import axios from 'axios';

const BreakingBadContext = React.createContext({
  characters: [],
  quotes: [],
  episodes: [],
})

export const BreakingBadContextProvider = (props) => {
  const [characters, setCharacters] = React.useState([]);
  const [quotes, setQuotes] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);

  React.useEffect(() => {
    const fetchBreakingBad = async () => {
      const charactersURL = `/.netlify/functions/breakingBad?option=characters`
      const quotesURL = `/.netlify/functions/breakingBad?option=quotes`
      const episodesURL = `/.netlify/functions/breakingBad?option=episodes`

      try {
        const charactersResponse = await axios.get(charactersURL);
        const characters = await charactersResponse.data;
        setCharacters(characters);

        const quotesResponse = await axios.get(quotesURL);
        const quotes = await quotesResponse.data;
        setQuotes(quotes);

        const episodesResponse = await axios.get(episodesURL);
        const episodes = await episodesResponse.data;
        setEpisodes(episodes);
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
      episodes,
    }}>
      {props.children}
    </BreakingBadContext.Provider>
  )
}

export const useBreakingBadContext = () => React.useContext(BreakingBadContext)