const baseUrl = `http://localhost:3030/jsonstore`;
const services = {};

function getAllGames() {
    return fetch(`${baseUrl}/games`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}
services.getAllGames = getAllGames;

function getDetailsOfGame(gameid) {
    return fetch(`${baseUrl}/games/${gameid}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}
services.getDetailsOfGame = getDetailsOfGame;

function addNewGame(data) {
    fetch(`${baseUrl}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).catch((err) => console.log(err));
}
services.addNewGame = addNewGame;

function getComments(gameid){
    return fetch(`${baseUrl}/comments/${gameid}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}
services.getComments = getComments;

function createComment(comment,gameid){
    fetch(`${baseUrl}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({comment, gameId: gameid}),
    })
    .then(com => console.log(com))
    .catch((err) => console.log(err));
}
services.createComment = createComment
export default services;
