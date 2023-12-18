import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = ()=>{
    const langKey = useSelector(store=>store.config.lang);
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTION);
        const json = await data.json();
        return json.results;
    }
    const handleGptSearchClick = async ()=>{
        // const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query: "+
        // searchText.current.value +
        // ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Don, Gadar, Sholay, Koi Mil Gaya, Golmaal";
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });
        // if(!gptResults.choices){

        // }
        // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        const gptMovies = ["Andaz Apna Apna","Hera Pheri","Chupke Chupke","Padosan","Sholay"];
        const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
      
    }
    return <div className="pt-[40%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input ref = {searchText} className= "p-3 m-4 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className="bg-red-700 m-4 px-4 py-2 col-span-3 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
}

export default GptSearchBar;