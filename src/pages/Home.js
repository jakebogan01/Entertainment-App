import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import useFetch from "../components/useFetch";
import {useEffect} from "react";

const Home = ({title, funcNav}) => {
    let { data:popularMovies } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US');
    let { data:topRatedMovies } = useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US');
    let { data:topRatedShows } = useFetch('https://api.themoviedb.org/3/tv/top_rated?api_key=0497a560599e4b1196149db7ecbc29bb&language=en-US&page=1');

    useEffect(() => {
        document.title = title;
        funcNav(true);
        console.log(popularMovies)
        console.log(topRatedShows)
        console.log(topRatedMovies)
    }, [popularMovies, topRatedShows])

    return (
        <div>
            <Search title="Search for movies or TV series" />
            {popularMovies && <Trending popularMovies={popularMovies} />}
            {topRatedMovies && <Recommended topRatedMovies={topRatedMovies} topRatedShows={topRatedShows} />}
        </div>
    );
}

export default Home;