import AllMovies from "../components/AllMovies";
import {Component} from "react";
import Search from "../components/Search";

export default class Movies extends Component {
    render() {
        return (
            <div>
                <Search title="Search for movies" />
                <AllMovies />
            </div>
        );
    }
}