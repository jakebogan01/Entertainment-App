import Search from "../components/Search";
import AllBookmarks from "../components/AllBookmarks";
import {useEffect} from "react";
import useFetch from "../components/useFetch";

const Bookmarked = ({title, funcNav}) => {
    let { data:popularMovies } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=3');
    let { data:popularShows } = useFetch('https://api.themoviedb.org/3/tv/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=3');

    useEffect(() => {
        document.title = title;
        funcNav(true);
    }, [title, funcNav])

    return (
        <div>
            <Search title="Search for your bookmarks" />
            {popularMovies && <AllBookmarks popularMovies={popularMovies} popularShows={popularShows} />}
        </div>
    );
}

export default Bookmarked;