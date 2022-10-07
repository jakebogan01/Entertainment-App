import AllShows from "../components/AllShows";
import {useEffect, useState} from "react";
import Search from "../components/Search";
import useFetch from "../components/useFetch";
import SearchResults from "../components/SearchResults";

const Shows = ({title}) => {
    let { data:popularShows } = useFetch('https://api.themoviedb.org/3/tv/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1');
    const [searchResults, setSearchResults] = useState("");
    let { data:results } = useFetch('https://api.themoviedb.org/3/search/tv?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1&query=', searchResults, 'shows');

    const handleSubmit = (e, msg) => {
        e.preventDefault();
        setSearchResults(msg);
    }

    const Searched = () => {
        return (
            <SearchResults results={results} type="shows" />
        );
    };

    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search handleSubmit={handleSubmit} title="Search for TV series" />
            <div className={searchResults !== "" ? 'block' : 'hidden'}>
                {results && <Searched />}
            </div>
            <div className={searchResults === "" ? 'block' : 'hidden'}>
                {popularShows && <AllShows popularShows={popularShows} />}
            </div>
        </div>
    );
}

export default Shows;