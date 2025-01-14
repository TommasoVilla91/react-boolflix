import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Searchbar() {

    const { searchValue, setSearchValue, getMovies } = useContext(GlobalContext);
    
    return (
        <>
            <input 
                type="search" 
                value={searchValue} 
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={getMovies}>Cerca</button>
        </>
    );
};

export default Searchbar;