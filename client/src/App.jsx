import Catalogue from "./components/Catalogue/Catalogue";
import CreateGame from "./components/Create-game/Create-game";
import GameDetails from "./components/Game-details/Game-details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <>
            <div id="box">
                <Header />
                <Home />
                <Login />
                <Register />
                <CreateGame/>
                <GameDetails/>
                <Catalogue />
            </div>
        </>
    );
}

export default App;
