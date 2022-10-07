import AllMovies from "../components/AllMovies";
import {useEffect, useState} from "react";
import Search from "../components/Search";
import useFetch from "../components/useFetch";
import SearchResults from "../components/SearchResults";

const Movies = ({title}) => {
    let { data:popularMovies } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=2');
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
    }, [])

    return (
        <div>
            <Search handleSubmit={handleSubmit} title="Search for movies" />
            <div className={searchResults !== "" ? 'block' : 'hidden'}>
                {results && <Searched />}
            </div>
            <div className={searchResults === "" ? 'block' : 'hidden'}>
                {popularMovies && <AllMovies popularMovies={popularMovies} />}
            </div>
        </div>
    );
}

export default Movies;