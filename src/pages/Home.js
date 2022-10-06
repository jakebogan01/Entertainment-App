import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import {useEffect} from "react";

const Home = ({title, funcNav}) => {
    useEffect(() => {
        document.title = title;
        funcNav(true);
    }, [])

    return (
        <div>
            <Search title="Search for movies or TV series" />
            <Trending/>
            <Recommended />
        </div>
    );
}

export default Home;