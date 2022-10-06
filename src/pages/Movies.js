import AllMovies from "../components/AllMovies";
import {useEffect} from "react";
import Search from "../components/Search";
import useFetch from "../components/useFetch";

const Movies = ({title}) => {
    let { data:popularMovies } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=2');

    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search title="Search for movies" />
            {popularMovies && <AllMovies popularMovies={popularMovies} />}
        </div>
    );
}

export default Movies;