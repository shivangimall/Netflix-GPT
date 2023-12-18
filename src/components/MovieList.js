import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({title, movies})=>{
    return <div className="px-6 ">
         <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
           
            <div className="flex">
                {
                 movies &&  movies.map((movie)=> <MovieCard key = {movie.id} movie = {movie}/>)
                   
                }
           
            </div>
        </div>
    </div>
}

export default MovieList;