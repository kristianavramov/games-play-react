import { Routes, Route } from "react-router-dom";

import Catalogue from "./components/Catalogue/Catalogue";
import CreateGame from "./components/Create-game/Create-game";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <>
            <div id="box">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="create-game" element={<CreateGame />} />
                    <Route path="catalogue" element={<Catalogue />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
