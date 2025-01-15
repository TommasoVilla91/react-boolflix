import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Searchbar() {

    const { searchValue, setSearchValue, getAll } = useContext(GlobalContext);

    function handleEnterKey(event) {
        if (event.key === "Enter") {
            getAll();
        };
    };
    
    return (
        <>
            <input
                className="searchbar"
                placeholder="titolo film/serie tv" 
                type="search" 
                value={searchValue} 
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyUp={handleEnterKey}
            />
            <button onClick={getAll}>Cerca</button>
        </>
    );
};

export default Searchbar;