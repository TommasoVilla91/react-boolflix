function AppCard({curMovie, isMovie}) {

    function stars() {

        const voteExc = Math.ceil(curMovie.vote_average / 2);
        const starsNum = 5;

        let printStars = [];
        for (let i = 0; i < starsNum; i++) {
            if (i < voteExc) {
                printStars.push(<i key={i} class="fa-solid fa-star"></i>);
            } else {
                printStars.push(<i key={i} class="fa-regular fa-star"></i>);
            };
        };
        return printStars;
    };

    return (
        <div className="col">
            <div className="card">
                <div className="card-image">
                    <span className={`label ${isMovie ? "label-movie" : "label-serie"}`}>
                        {isMovie ? "Film" : "Serie TV"}
                    </span>
                    {curMovie.poster_path === null ? (
                        <img src="https://placehold.co/400x600?text=Poster+Mancante\n+\n=(" alt={curMovie.title || curMovie.name}/>
                    ) : (
                        <img src={`http://image.tmdb.org/t/p/w342${curMovie.poster_path}`} alt={curMovie.title || curMovie.name} />
                    )}
                </div>
                <div className="card-text">
                    <span className="title"><strong>Titolo:</strong> {curMovie.title || curMovie.name}</span>
                    <span className="ogTitle"><strong>Titolo originale:</strong> {curMovie.original_title || curMovie.original_name}</span>
                    <div className="lenguage">
                        <span><strong>Lingue:</strong></span>
                        <img
                            className="flag"
                            src={
                                curMovie.original_language === "en" ? "../public/images/en.png" : curMovie.original_language === "it" ? "../public/images/it.png" : "../public/images/placeholder.png"
                            }
                            alt={curMovie.original_language}
                        />
                    </div>
                    <span><strong>Voto: {stars()}</strong></span>
                    <span className="overview"><strong>Trama:</strong> {curMovie.overview}</span>
                </div>
            </div>
        </div>
    );
};

export default AppCard;