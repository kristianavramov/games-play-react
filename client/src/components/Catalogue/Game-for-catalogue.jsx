import { Link } from "react-router-dom";
export default function GameForCatalogue({ props }) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={props.imageUrl} />
                <h6>{props.title}</h6>
                <h2>{props.category}</h2>
                <Link to={`details/${props._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
}
