import Carousel from "../components/Carousel";
import AllShows from "../components/AllShows";
import {Component} from "react";
import Search from "../components/Search";

export default class Shows extends Component {
    render() {
        return (
            <div>
                <Search title="Search for TV series" />
                <AllShows />
            </div>
        );
    }
}