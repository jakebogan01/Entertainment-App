import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Bookmarked from "./pages/Bookmarked";
import Login from "./pages/Login";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from "react";

function App() {
    const [showNav, setShowNav] = useState(true);

    return (
        <Router>
            <div className="App bg-[#10141E] font-outfit">
                {showNav && <Navbar />}
                <main>
                    <Routes>
                        <Route path="/" element={<Home title="Home" funcNav={setShowNav} />}></Route>
                        <Route path="/movies" element={<Movies title="Movies" />}></Route>
                        <Route path="/tv-series" element={<Shows title="TV Show" />}></Route>
                        <Route path="/my-bookmarks" element={<Bookmarked title="My Bookmarks" />}></Route>
                        <Route path="/register" element={<Login title="registration" funcNav={setShowNav} />}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;