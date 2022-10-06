import AllMovies from "../components/AllMovies";
import {useEffect} from "react";
import Search from "../components/Search";

const Movies = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search title="Search for movies" />
            <AllMovies />
        </div>
    );
}

export default Movies;