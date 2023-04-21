import React, { useState } from 'react'
import './Banner.css'
import { API_KEY, imageURL } from '../constants/constants.js'
import axios from '../../axios'
import { useEffect } from 'react'

function Banner() {
  const [movie, setmovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0])
      setmovie(response.data.results[Math.floor(Math.random() * response.data.results.length + 1)])
    })
      .catch(function (error) {
        console.log(error);
      });

  }, [])


  return (<><div style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})` }} className='banner' >
    <div className='navbar'>
      <div className='logo'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo">
        </img></div>
     <div className='left-section'><input  placeholder="Enter movies or TV shows" className='searchbar'></input><button className='search'><img src="https://img.icons8.com/search" width="20px" height= "20px"/></button><img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
      className='avatar'></img></div>

    </div>
    <div className='content'>
      <h1 className='title'>{movie ? movie.title : ""}</h1>
      <div className='bannerbuttons'>
        <button className='button'>Play</button>
        <button className='button'>My list</button>
      </div>
      <h1 className='description'>{movie ? movie.overview : ""}</h1>
    </div>
    <div className='fade-bottom'></div>
  </div></>)
}
export default Banner;