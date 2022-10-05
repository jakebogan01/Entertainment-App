import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App bg-[#10141E] font-outfit">
                <Navbar />
                <main>
                    <Search />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/movies" element={<Movies />}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;