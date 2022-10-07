import AllShows from "../components/AllShows";
import React, {useEffect, useState} from "react";
import Search from "../components/Search";
import useFetch from "../components/useFetch";
import SearchResults from "../components/SearchResults";

const Shows = ({title, funcNav}) => {
    let { data:popularShows, isPending } = useFetch('https://api.themoviedb.org/3/tv/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1');
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
        funcNav(true);
    }, [title, funcNav])

    return (
        <div>
            <Search handleSubmit={handleSubmit} title="Search for TV series" />
            <div className={searchResults !== "" ? 'block' : 'hidden'}>
                {results && <Searched />}
            </div>
            {isPending && <h2 className="title font-light text-xl md:text-[2rem] text-white pl-4 md:pl-[1.5625rem] mb-[1.3125rem] md:mb-7 transition-all">Loading</h2>}
            {!isPending &&
                <div className={searchResults === "" ? 'block' : 'hidden'}>
                    {popularShows && <AllShows popularShows={popularShows}/>}
                </div>
            }
        </div>
    );
}

export default Shows;