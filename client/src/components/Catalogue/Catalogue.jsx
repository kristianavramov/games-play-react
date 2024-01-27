import { useEffect, useState } from "react";
import GameForCatalogue from "./game-for-catalogue";
import services from "../../services/services";

export default function Catalogue() {
    const [allGames, setAllGames] = useState([]);
    useEffect(() => {
        async function getData() {
            let allGamesFromFetch = await services.getAllGames();

            setAllGames(Object.values(allGamesFromFetch));
        }
        getData();
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {allGames &&
                allGames.map((game) => (
                    <GameForCatalogue key={game._id} props={{ ...game }} />
                ))}
            {allGames.length == 0 && <h3 className="no-articles">No articles yet</h3>}
        </section>
    );
}
