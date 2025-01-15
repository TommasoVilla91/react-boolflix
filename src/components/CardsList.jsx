import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AppCard from "./AppCard";


function CardsList() {

    const { movies, series } = useContext(GlobalContext);

    return (
        <main>
            <div className="container">
                <div className="row">
                    {movies.map((movie) =>
                        <AppCard key={movie.id} curMovie={movie} />
                    )}

                    {series.map((serie) =>
                        <AppCard key={serie.id} curMovie={serie} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default CardsList;