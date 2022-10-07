import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Bookmarked from "./pages/Bookmarked";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from "react";

function App() {
    const [showNav, setShowNav] = useState(true);

    return (
        <Router>
            <div className="App flex flex-col 1440:flex-row max-w-[90rem] mx-auto bg-[#10141E] font-outfit">
                {showNav && <Navbar />}
                <main className="flex-1 1440:max-w-[79.75rem] 1440:ml-9 pb-10 transition-all">
                    <Routes>
                        <Route path="/" element={<Home title="Home" funcNav={setShowNav} />}></Route>
                        <Route path="/movies" element={<Movies title="Movies" funcNav={setShowNav} />}></Route>
                        <Route path="/tv-series" element={<Shows title="TV Show" funcNav={setShowNav} />}></Route>
                        <Route path="/my-bookmarks" element={<Bookmarked title="My Bookmarks" funcNav={setShowNav} />}></Route>
                        <Route path="/login" element={<Login title="Login" funcNav={setShowNav} />}></Route>
                        <Route path="/registration" element={<SignUp title="registration" funcNav={setShowNav} />}></Route>
                        <Route path="*" element={<NotFound title="Page Not Found" funcNav={setShowNav} />}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;