function AppCard({curMovie}) {

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
                    <img src={`http://image.tmdb.org/t/p/w342${curMovie.poster_path}`} alt={curMovie.title || curMovie.name} />
                </div>
                <div className="card-text">
                    <h3>{curMovie.title || curMovie.name}</h3>
                    <h5>{curMovie.original_title || curMovie.original_name}</h5>
                    <img
                        src={
                            curMovie.original_language === "en" ? "../public/images/en.png" : curMovie.original_language === "it" ? "../public/images/it.png" : "../public/images/placeholder.png"
                        }
                        alt={curMovie.original_language}
                    />
                    <div>{stars()}</div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;