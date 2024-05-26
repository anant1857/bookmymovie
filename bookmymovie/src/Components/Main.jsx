import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MovieCard from './MovieCard';

let base_url = "https://api.themoviedb.org/3"
let API_key = "916377ca3ea58656388735152252c9f5"
 let url = "https://api.themoviedb.org/3/movie/popular?api_key=916377ca3ea58656388735152252c9f5"
let arr = ["Popular", "Top-Rated", "Upcoming"];
function Main() {
    const [movies, setMovies] = useState([])
    const [url_set, setUrl] = useState(url)
    const [search,setSearch]=useState("");
    useEffect(() => {
        fetch(`${url_set}&query=${search}`).then(res => res.json()).then(data => {
            // console.log(data.results);
            setMovies(data.results);
        });

    },[url_set])

    const getData = (movieType) => {
        if (movieType == "Popular") {
            url = "https://api.themoviedb.org/3/movie/popular?api_key=916377ca3ea58656388735152252c9f5&language=en-US&page=1"
        }
        if (movieType == "Top-Rated") {
            url = "https://api.themoviedb.org/3/movie/top_rated?api_key=916377ca3ea58656388735152252c9f5&language=en-US&page=1"
        }
        if (movieType == "Upcoming") {
            url = "https://api.themoviedb.org/3/movie/upcoming?api_key=916377ca3ea58656388735152252c9f5&language=en-US&page=1"
        }

        setUrl(url);
    }


    return (
        <div className='main-page'>
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">BookMyMovie <i className="fa-solid fa-video"></i></Navbar.Brand>
                        <Nav className="me-start">
                            {
                                arr.map((value,res) => {
                                    return (
                                        <Nav.Link className='me-3' name={value} key={res} onClick={(e) => { getData(e.target.name) }}>{value}</Nav.Link>
                                    )
                                })
                            }
                        </Nav>
                        <form>
                            <div className='search-btn'>
                                <input type='text' placeholder='Enter Movie Name' className='input-text' value={search} onChange={(e)=>{setSearch(e.target.value)}}
                                
                                />
                                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>

                        </form>
                    </Container>

                </Navbar>
            </div>
            <div className='container'>
                {
                    (movies.length == 0) ? <p className='notfound'> Not Found</p> : movies.map((res, pos) => {
                        return (
                            <MovieCard info={res} key={pos} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main