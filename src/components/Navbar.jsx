import SearchBar from "./SearchBar";


function Navbar() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div>
                        <img src="" alt="logo" />
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;