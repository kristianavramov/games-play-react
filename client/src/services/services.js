const baseUrl = `http://localhost:3030/jsonstore/games`;
const services = {};

function getAllGames() {
    return fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
}
services.getAllGames = getAllGames;

function getDetailsOfGame(gameid) {
    return fetch(`${baseUrl}/${gameid}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}
services.getDetailsOfGame = getDetailsOfGame;

function addNewGame(data) {
    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).catch((err) => console.log(err));
}
services.addNewGame = addNewGame;

export default services;
