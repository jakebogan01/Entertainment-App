import Carousel from "../components/Carousel";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import {useEffect} from "react";

const Home = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search title="Search for movies or TV series" />
            <Carousel/>
            <Recommended />
        </div>
    );
}

export default Home;