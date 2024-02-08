import {useEffect, useState} from 'react'

const Banner = ({fetchurl}) => {
  console.log(fetchurl);
    const [movie, setMovie] = useState([])

    const fetchBanner = async () => {
      const API_KEY = 'ef6c97b1e970d7e7cc8bfa3d35c69f26'
      const url = 'https://api.themoviedb.org/3'

      const res = await fetch (`https://api.themoviedb.org/3${fetchurl}`)
      const data = await res.json()
      setMovie(data.results[
        Math.floor(Math.random() * data.results.length - 1)
      ]);
    }

    useEffect(() => {
      fetchBanner()
    },[])

      const bannerTitle = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
      
  return (
    <header className='banner' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}>
      <div className='banner-header'>
        <div className='banner-details'>
          <h1>{movie.original_name}</h1>
          <button className='btn-play'>Play</button>
          <button className='btn-list'>My List</button>
          <p className='banner-overview'>{bannerTitle(movie.overview, 150)}</p>
        </div>  
      </div>
      <div className='banner-bottom'></div>
    </header>
  )
}

export default Banner