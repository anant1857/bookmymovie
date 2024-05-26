import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
function MovieCard(mov) {
    console.log(mov.info);
    let img_path="https://image.tmdb.org/t/p/w500"
  
    return (
        <>
        <Link to={`movie/${mov.info.id}`} style={{textDecoration:"none",color:"white"}}>
        
        <div>
              <CardGroup>
            <Card style={{ width: '18rem' }} className='cardmovie'>
                <Card.Img variant="top" src={img_path+mov.info.poster_path} className='cardimg'/>
                <Card.Body>
                    <Card.Title className='text-white'>{mov.info.title}</Card.Title>
                    <Card.Text className='text-white'>
                       {mov.info.vote_average}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
        </Link>
        </>
    )
}

export default MovieCard