import Carousel from "../components/Carousel";
import Recommended from "../components/Recommended";
import {Component} from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Recommended />
            </div>
        );
    }
}