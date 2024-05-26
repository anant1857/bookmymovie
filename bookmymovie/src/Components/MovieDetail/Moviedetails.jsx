import React,{useEffect,useState} from "react"
import "./movie.css"
import{useParams} from "react-router-dom"

const Movie =()=>{
    const [moviedetails ,setMovieDetails] = useState()
    const {id} = useParams()
   

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=916377ca3ea58656388735152252c9f5&language=en-US`).then(res => res.json()).then(data => {
            // console.log(data.results);
            setMovieDetails(data)
        });

    },[])


    return(
        <>
         <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${moviedetails ? moviedetails.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${moviedetails ? moviedetails.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{moviedetails ? moviedetails.original_title : ""}</div>
                        <div className="movie__rating">
                            {moviedetails ? moviedetails.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{moviedetails ? "(" + moviedetails.vote_count + ") votes" : ""}</span>
                        </div>
                      
                        <div className="movie__runtime">{moviedetails ? moviedetails.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{moviedetails ? "Release date: " + moviedetails.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                moviedetails && moviedetails.genres
                                ? 
                                moviedetails.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Overview</div>
                        <div>{moviedetails ? moviedetails.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
        </>
    )
}


export default Movie