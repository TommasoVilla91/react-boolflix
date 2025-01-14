import { useEffect, useState } from "react";
import CardsList from "./components/CardsList";
import Navbar from "./components/NavBar";
import GlobalContext from "./contexts/GlobalContext"
import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "bb8eb9ace5efaec93609924170942a86";

function App() {
  
  // stato per cercare film SearchBar
  const [searchValue, setSearchValue] = useState("");

  // stati per salvare film e serie
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  // chiamata axios per film
  function getMovies() {
    axios.get(`${apiUrl}/search/movie`, {
        params: {
            api_key: apiKey,
            query: searchValue
        },
    })
    .then((resp) => {
        // stato per salvare i film
        setMovies(resp.data.results);
    });
  };

  // chiamata axios per serie
  function getSeries() {
    axios.get(`${apiUrl}/search/tv`, {
        params: {
            api_key: apiKey,
            query: searchValue
        },
    })
    .then((resp) => {
        // stato per salvare i film
        setSeries(resp.data.results);
    });
  };

  // funzione che raggruppa le due chiamate axio, utile per un singolo pulsante
  function getAll() {
    getMovies();
    getSeries();
  }

 
  // condivisione globale elementi 
  const globalProviderValue = {
    searchValue,
    setSearchValue,
    getMovies,
    getSeries,
    getAll,
    movies,
    series
  };

  return (
    <>
      <GlobalContext.Provider value={globalProviderValue}>
        <Navbar />
        <CardsList />
      </GlobalContext.Provider>  
    </>
  );
};

export default App;