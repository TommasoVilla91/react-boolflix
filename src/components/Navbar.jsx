import SearchBar from "./SearchBar";


function Navbar() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-30">
                        <img className="logo" src="../public/images/logo-Boolflix.png" alt="logo" />
                    </div>
                    <div className="col-30">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;