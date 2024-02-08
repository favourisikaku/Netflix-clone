import './App.css';
import Banner from './Components/Banner';
import RowCard from './Components/RowCard';
import Nav from './Components/Nav';

const App = () => {  
  const API_KEY = 'ef6c97b1e970d7e7cc8bfa3d35c69f26'
  const request = {
		netflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213=en-US`,
    trending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
		topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
		actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
		comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
		horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
		romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
		documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

  return (
    <div className="App">
      <Nav />
      <Banner fetchurl={request.netflixOriginals}/>
      <RowCard  title = "Netflix Originals" fetchurl={request.actionMovies} />
      <RowCard  title = "Trending Now" fetchurl={request.trending} />
      <RowCard  title = "TopRated" fetchurl={request.topRated} />
      <RowCard  title = "Action Movies" fetchurl={request.netflixOriginals} />
      <RowCard  title = "Comedy Movies" fetchurl={request.comedyMovies} />
      <RowCard  title = "Horror Movies" fetchurl={request.horrorMovies} />
      <RowCard  title = "Romance Movies" fetchurl={request.romanceMovies} />
      <RowCard  title = "Documentaries" fetchurl={request.documentaries} />
    </div>
  );
}

export default App;
