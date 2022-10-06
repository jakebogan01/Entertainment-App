import Carousel from "../components/Carousel";
import Recommended from "../components/Recommended";
import {Component} from "react";
import Search from "../components/Search";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Search title="Search for movies or TV series" />
                <Carousel/>
                <Recommended />
            </div>
        );
    }
}