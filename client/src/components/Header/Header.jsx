import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>
                <Link to={'/'} className="home">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to={'catalogue'}>All games</Link>

                <div id="user">
                    <Link to={'create-game'}>Create Game</Link>
                    <Link to={'/'}>Logout</Link>
                </div>

                <div id="guest">
                    <Link to={'login'}>Login</Link>
                    <Link to={'register'}>Register</Link>
                </div>
            </nav>
        </header>
    );
}
