import { useState , useEffect} from "react"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";



const RowCard = ({title, fetchurl}) => {

	const [movies, setMovies] = useState([])
	const [trailerUrl, setTrailerUrl] = useState('')

  const key ='ef6c97b1e970d7e7cc8bfa3d35c69f26'
	
	const api =  async () => {
		const res = await fetch(`https://api.themoviedb.org/3${fetchurl}`)
		const data = await res.json()
	  setMovies(data.results);
	}

	useEffect(() => {
		api()
	}, [])

  const opts = {
    width: "100%",
    height: "300",
    playerVars: {
      autoplay: 1,
    },
  };

		const handleClick =  (movie) => {
      if (trailerUrl){
        setTrailerUrl('')
      }else{
         movieTrailer(movie?.name || movie?.original_title || '')
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search)
         setTrailerUrl(urlParams.get('v')) 
          
        })
        .catch((error) => console.log(error))
      }}

  return (
    <div>
       <h2 className="title">
				{title}
			 </h2>
		  <div className='image-header'>
				{movies.map((movie) => (
				<img onClick={() => handleClick(movie)} key={movie.id} className='movie-image' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name}/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    
    </div>
  )
}

export default RowCard