import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import services from "../../services/services";

export default function GameDetails() {
    const matchingComments = [];
    const [data, setData] = useState({});
    const [comment, setComment] = useState("");
    const [commentFromServer, setComments] = useState({});
    const { gameid } = useParams();
    useEffect(() => {
        setComment("");
    }, []);
    useEffect(() => {
        async function getData() {
            let dataFetched = await services.getDetailsOfGame(gameid);
            setData(dataFetched);
        }
        getData();
    }, [gameid]);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={data.imageUrl} />
                    <h1>{data.title}</h1>
                    <span className="levels">{data.maxLevel}</span>
                    <p className="type">{data.category}</p>
                </div>

                <p className="text">{data.summary}</p>
                <Comments />
            </div>
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="button"
                        value="Add Comment"
                        onClick={(e) => {
                            e.preventDefault;
                            services.createComment(comment, gameid);
                            setComment("");
                        }}
                    />
                </form>
            </article>
        </section>
    );
}
