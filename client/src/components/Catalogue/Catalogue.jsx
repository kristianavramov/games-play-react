import { useEffect, useState } from "react";
import GameForCatalogue from "./game-for-catalogue";
import services from "../../services/services";





export default function Catalogue() {

    let allGames = services.getAllGames()
    console.log(allGames)
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

                {allGames.map(game =>  <GameForCatalogue key={game._id} props = {{...game}}/> )}
            

            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}
