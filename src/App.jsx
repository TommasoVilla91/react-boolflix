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

 
  // condivisione globale elementi 
  const globalProviderValue = {
    searchValue,
    setSearchValue,
    getMovies,
    getSeries,
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