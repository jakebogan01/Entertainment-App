import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import useFetch from "../components/useFetch";
import SearchResults from "../components/SearchResults";
import React, {useEffect, useState} from "react";
import AllMovies from "../components/AllMovies";

const Home = ({title, funcNav}) => {
    let { data:popularMovies, isPending:load1 } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US');
    let { data:topRatedMovies, isPending:load2 } = useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US');
    let { data:topRatedShows, isPending:load3 } = useFetch('https://api.themoviedb.org/3/tv/top_rated?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1');
    const [searchResults, setSearchResults] = useState("");
    let { data:results } = useFetch('https://api.themoviedb.org/3/search/movie?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&query=', searchResults, 'movies');

    const handleSubmit = (e, msg) => {
        e.preventDefault();
        setSearchResults(msg);
    }

    const Searched = () => {
        return (
            <SearchResults results={results} type="movies" />
        );
    };

    useEffect(() => {
        document.title = title;
        funcNav(true);
    }, [title, funcNav, popularMovies, topRatedMovies, topRatedShows])

    return (
        <div>
            <Search handleSubmit={handleSubmit} title="Search for movies or TV series" />
            <div className={searchResults !== "" ? 'block' : 'hidden'}>
                {results && <Searched />}
            </div>
            {load1 && <h2 className="title font-light text-xl md:text-[2rem] text-white pl-4 md:pl-[1.5625rem] mb-[1.3125rem] md:mb-7 transition-all">Loading</h2>}
            {!load1 &&
                <div className={searchResults === "" ? 'block' : 'hidden'}>
                    {popularMovies && <Trending popularMovies={popularMovies}/>}
                    {topRatedMovies && <Recommended topRatedMovies={topRatedMovies} topRatedShows={topRatedShows}/>}
                </div>
            }
        </div>
    );
}

export default Home;