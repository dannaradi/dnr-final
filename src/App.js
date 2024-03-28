import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList()
  }, []);

  function getMovieList() {
    setIsLoading(true)
    let text = searchText || "man"
    let url = `https://www.omdbapi.com/?apikey=f8f74eab&s=${text}`
    fetch(url)
    .then((res => res.json()))
    .then((data) =>{
      setMovieList(data.Search)
      setIsLoading(false)
    })
  }

  const submitHandle = (e) => {
    e.preventDefault()

    getMovieList()
  }

  return (
    <div>
      <Header submitHandle={submitHandle} setSearchText={setSearchText} searchText={searchText} />
      {
        (isLoading) ? 
        <div className='container d-flex gap-4 flex-wrap justify-content-center' style={{marginTop: "7rem"}}>
            <img height="300" width={300} src="https://media.tenor.com/n1GNGQYlVJ8AAAAj/kakaotalk-emoticon.gif" alt="loading icon" />
        </div> 
        : <Movie movieList={movieList} isLoading={isLoading} />
      }
      
      
    </div>
  );
}

export default App;
