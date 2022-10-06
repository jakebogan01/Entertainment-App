import Search from "../components/Search";
import AllBookmarks from "../components/AllBookmarks";
import {useEffect} from "react";

const Bookmarked = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [])

    return (
        <div>
            <Search title="Search for your bookmarks" />
            <AllBookmarks />
        </div>
    );
}

export default Bookmarked;