import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";


function CardsList() {

    const { movies, series } = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) =>
                    <div className="col" key={movie.id}>
                        <div className="card">
                            <div className="card-image">
                                <img src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                            </div>
                            <div className="card-text">
                                <h3>{movie.title}</h3>
                                <h5>{movie.original_title}</h5>
                                <img
                                    src={
                                        movie.original_language === "en" ? "../public/images/en.png" : movie.original_language === "it" ? "../public/images/it.png" : "../public/images/placeholder.png"
                                    }
                                    alt={movie.original_language}
                                />
                                <p>{movie.vote_average}</p>
                            </div>
                        </div>
                    </div>
                )}

                {series.map((serie) =>
                    <div className="col" key={serie.id}>
                        <div className="card">
                            <div className="card-image">
                                <img src={`http://image.tmdb.org/t/p/w342${serie.poster_path}`} alt="" />
                            </div>
                            <div className="card-text">
                                <h3>{serie.name}</h3>
                                <h5>{serie.original_name}</h5>
                                <img
                                    src={
                                        serie.original_language === "en" ? "../public/images/en.png" : serie.original_language === "it" ? "../public/images/it.png" : "../public/images/placeholder.png"
                                    }
                                    alt={serie.original_language}
                                />
                                <p>{serie.vote_average}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardsList;