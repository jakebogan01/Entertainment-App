import AllShows from "../components/AllShows";
import {useEffect} from "react";
import Search from "../components/Search";

const Shows = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search title="Search for TV series" />
            <AllShows />
        </div>
    );
}

export default Shows;