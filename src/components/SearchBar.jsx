import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Searchbar() {

    const { searchValue, setSearchValue, getAll } = useContext(GlobalContext);
    
    return (
        <>
            <input 
                type="search" 
                value={searchValue} 
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={getAll}>Cerca</button>
        </>
    );
};

export default Searchbar;