import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () =>{
    const {movieNames, movieResults} = useSelector(store=>store.gpt);
    if(!movieNames)
      return;
    return <div className="bg-black p-4 m-4 text-white bg-opacity-90">
        <div>{
        movieNames.map((movieName,index)=> <MovieList key = {movieName} title={movieName} movies={movieResults[index]}/>)
    }
    </div>
    </div>
}


export default GptMovieSuggestions;