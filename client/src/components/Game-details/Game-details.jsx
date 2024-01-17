import services from "../../services/services";

export default function GameDetails() {
    const data = services.getDetailsOfGame()
    return (

        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src="images/MineCraft.png" />
                    <h1>{data.title}</h1>
                    <span className="levels">{data.maxLevel}</span>
                    <p className="type">{data.category}</p>
                </div>

                <p className="text">
                    {data.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>

                    <p className="no-comment">No comments.</p>
                </div>
            </div>
        </section>
    );
}
