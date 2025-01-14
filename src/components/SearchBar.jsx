import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Searchbar() {

    const { searchValue, setSearchValue, getMovies, getSeries } = useContext(GlobalContext);
    
    return (
        <>
            <input 
                type="search" 
                value={searchValue} 
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={getMovies}>Cerca</button>
            <button onClick={getSeries}>Cerca</button>
        </>
    );
};

export default Searchbar;