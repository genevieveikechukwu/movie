

function Main({ movies, spinRef, onLoaded }) {

    const genremovies = movies.map((movie, index) => {
        return (<div className="movie-card  rounded-t-lg" key={ index } onLoad={ onLoaded } style={ { background:"#0D0D0D" }}>
            <figure className="">
                <img
                    src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
                    alt={ movie.title }
                    className=" w-full object-cover rounded-t-lg h-2/5" />
                <figcaption className="font-bold text-orange-600 text-center">{ movie.original_title }</figcaption>
                <p className="p-3">{ movie.overview.split(/w+.\ /g)[ 0 ] }</p>
            </figure>
        </div>
        );
    });


    return (
        <div className="main-container w-full md:ml-60">
            <p className=" text-orange-600 absolute left-1/3 md:left-1/2 top-2/4 text-8xl animate-spin" ref={spinRef}><i className="fa fa-spinner" aria-hidden="true"></i></p>
            <div className="inner-container  grid gap-4 grid-cols-1 md:grid-cols-3 p-6 border-gray-700 border mt-20" style={ { color:"#FFFFF0"}}>
                { genremovies }
                {window.scroll({
                    top:0,
                    behavior:"smooth",
                })}
            </div>
        </div>
    );
}

export default Main;
