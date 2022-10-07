import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import useFetch from "../components/useFetch";
import {useEffect, useState} from "react";
import SearchResults from "../components/SearchResults";

const Home = ({title, funcNav}) => {
    let { data:popularMovies } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US');
    let { data:topRatedMovies } = useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US');
    let { data:topRatedShows } = useFetch('https://api.themoviedb.org/3/tv/top_rated?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1');
    const [searchResults, setSearchResults] = useState("");

    const handleSubmit = (e, msg) => {
        e.preventDefault();
        setSearchResults(msg);
    }

    const FilterByDescription = () => {
        return (
            <SearchResults searchResults={searchResults} />
        );
    };

    useEffect(() => {
        document.title = title;
        funcNav(true);
    }, [popularMovies, topRatedMovies, topRatedShows])

    return (
        <div>
            <Search handleSubmit={handleSubmit} title="Search for movies or TV series" />
            {/*<FilterByDescription />*/}
            <div className={searchResults === "" ? 'block' : 'hidden'}>
                {popularMovies && <Trending popularMovies={popularMovies} />}
                {topRatedMovies && <Recommended topRatedMovies={topRatedMovies} topRatedShows={topRatedShows} />}
            </div>
        </div>
    );
}

export default Home;