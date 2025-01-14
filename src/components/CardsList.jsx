import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";


function CardsList() {

    const {movies} = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="row">
                {}
                <div className="col">
                    <div className="card">
                        <div className="card-image">
                            <img src="" alt="" />
                        </div>
                        <div className="card-text"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsList;