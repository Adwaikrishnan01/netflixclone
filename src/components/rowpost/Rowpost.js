import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageURL, API_KEY } from '../constants/constants.js'
import './Rowpost.css'
import YouTube from 'react-youtube';
function Rowpost(props) {
    const [originals, setoriginals] = useState([]);
    const [movieurl, setMovieurl] = useState('')
    useEffect(() => {

        axios.get(props.urls).then(response => {

            setoriginals(response.data.results)

        }).catch(error => { alert("networkerror") })

    }, [])
    
    const opts = {
        height: '350',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        
        },
    };
    
    const handleClick = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                console.log(response.data.results[0].key)
                setMovieurl(response.data.results[0].key)
            }

            else
                alert("No results found")
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {originals.map((movie) =>

                    <img onClick={() => handleClick(movie.id)} className={props.isSmall ? "smallposter" : "poster"} alt='poster' src={`${movie ? imageURL + movie.backdrop_path : ""}`}
                    key ={movie.id}></img>)

                }

            </div>
           {movieurl && <YouTube videoId={movieurl} opts={opts} />}
        </div>
    )
}
export default Rowpost;