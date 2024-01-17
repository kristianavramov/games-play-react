import { useState } from "react";
import services from "../../services/services";
let initialData = {
    title: "",
    category: "",
    maxLevel: "",
    imgUrl: "",
    summary: "",
};

export default function CreateGame() {
    let [createdGame, setCreatedGame] = useState(initialData);
    
    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={(e) =>
                            setCreatedGame({
                                ...createdGame,
                                title: e.target.value,
                            })
                        }
                        value={createdGame.title}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={(e) =>
                            setCreatedGame({
                                ...createdGame,
                                category: e.target.value,
                            })
                        }
                        value={createdGame.category}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        placeholder="1"
                        onChange={(e) =>
                            setCreatedGame({
                                ...createdGame,
                                maxLevel: e.target.value,
                            })
                        }
                        value={createdGame.maxLevel}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={(e) =>
                            setCreatedGame({
                                ...createdGame,
                                imgUrl: e.target.value,
                            })
                        }
                        value={createdGame.imgUrl}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={(e) =>
                            setCreatedGame({
                                ...createdGame,
                                summary: e.target.value,
                            })
                        }
                        value={createdGame.summary}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Game"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(createdGame)
                            
                            services.addNewGame(createdGame);

                            setCreatedGame(initialData);
                        }}
                    />
                </div>
            </form>
        </section>
    );
}
