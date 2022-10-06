import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import useFetch from "../components/useFetch";
import {useEffect} from "react";

const Home = ({title, funcNav}) => {
    let { data:movies } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US');
    let { data:shows } = useFetch('https://api.themoviedb.org/3/tv/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1');

    useEffect(() => {
        document.title = title;
        funcNav(true);
        console.log(movies)
        console.log(shows)
    }, [movies, shows])

    return (
        <div>
            <Search title="Search for movies or TV series" />
            <Trending/>
            {movies && <Recommended movies={movies} shows={shows} />}
        </div>
    );
}

export default Home;