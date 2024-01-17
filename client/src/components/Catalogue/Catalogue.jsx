import { useEffect, useState } from "react";
import GameForCatalogue from "./game-for-catalogue";


const baseUrl = 'http://localhost:3030/jsonstore/games'


export default function Catalogue() {

    const [allGames , allGamesFetchFn] = useState([])

    useEffect(()=>{
        fetch(baseUrl).then(res => res.json()).then(data => allGamesFetchFn(Object.values(data)))
    }, [])
    
console.log(allGames)
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            <div className="allGames">
                {allGames.map(game =>  <GameForCatalogue key={game._id} props = {{...game}}/> )}
            </div>
            

            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}
