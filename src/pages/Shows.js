import AllShows from "../components/AllShows";
import {useEffect} from "react";
import Search from "../components/Search";
import useFetch from "../components/useFetch";

const Shows = ({title}) => {
    let { data:popularShows } = useFetch('https://api.themoviedb.org/3/tv/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1');

    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search title="Search for TV series" />
            {popularShows && <AllShows popularShows={popularShows} />}
        </div>
    );
}

export default Shows;