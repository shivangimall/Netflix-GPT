import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({movie}) =>{
    if(!movie.poster_path)
       return null;
    return <div className="w-36 md:w-48 pr-4" >
        <Link key = {movie.poster_path} to = {'/watch'}>
        <img alt = "MovieImage" src = {IMG_CDN_URL+movie.poster_path}/>
        </Link>
    </div>
}
export default MovieCard;