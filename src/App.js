import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Bookmarked from "./pages/Bookmarked";
import './assets/css/global.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App bg-[#10141E] font-outfit">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/movies" element={<Movies />}></Route>
                        <Route path="/tv-series" element={<Shows />}></Route>
                        <Route path="/my-bookmarks" element={<Bookmarked />}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;