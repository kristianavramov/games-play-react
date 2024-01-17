import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseUrl = `http://localhost:3030/jsonstore/games`;
const services = {};

function getAllGames() {
    const [allGames, allGamesFetchFn] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => allGamesFetchFn(Object.values(data)));
    }, []);
    return allGames;
}
services.getAllGames = getAllGames;

const addNewGame = async (data) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log("Response from the server:", responseData);
};
services.addNewGame = addNewGame;

function getDetailsOfGame() {
    const [details, detailsFn] = useState([]);
    const {gameid} = useParams()
    useEffect(() => {
        fetch(`${baseUrl}/${gameid}`)
            .then((res) => res.json())
            .then((data) => detailsFn(data))
            .catch(err =>console.log(err));
    }, []);
    return details;
}
services.getDetailsOfGame = getDetailsOfGame;

export default services;
