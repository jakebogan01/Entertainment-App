import AllShows from "../components/AllShows";
import {Component} from "react";
import Search from "../components/Search";
import AllBookmarked from "../components/AllBookmarked";

export default class Bookmarked extends Component {
    render() {
        return (
            <div>
                <Search title="Search for your bookmarks" />
                <AllBookmarked />
            </div>
        );
    }
}