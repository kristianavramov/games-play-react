import { useEffect, useState } from "react";

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
    if (!response.ok) {
        throw new Error(
            `Failed to add new game. Server returned ${response.status}`
        );
    }
    const responseData = await response.json();
    console.log("Response from the server:", responseData);
};
services.addNewGame = addNewGame;
export default services;
