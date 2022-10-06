import Search from "../components/Search";
import AllBookmarked from "../components/AllBookmarked";
import {useEffect} from "react";

const Bookmarked = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search title="Search for your bookmarks" />
            <AllBookmarked />
        </div>
    );
}

export default Bookmarked;