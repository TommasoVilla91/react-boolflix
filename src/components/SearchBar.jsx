import axios from "axios";
import { useState } from "react";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "bb8eb9ace5efaec93609924170942a86";

function Searchbar() {

    const [searchValue, setSearchValue] = useState("");

    function getMovies() {
        axios.get(`${apiUrl}/search/movie`, {
            params: {
                api_key: apiKey,
                query: searchValue
            },
        })
        .then((resp) => {

        });
    };

    return (
        <>
            <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
        </>
    );
};

export default Searchbar;