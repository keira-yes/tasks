import { Link } from "react-router-dom";
import { IoPricetagsOutline } from "react-icons/io5";

const TaskPreview = ({ task }) => {
    const { status, createdAt, description, category, _id } = task;

    return (
        <div className="card">
            <div className="card__content">
                <span className={`card__status card__status--${status}`}>{status}</span>
                <span className="card__date">{new Date(createdAt).toLocaleString()}</span>
                <p className="card__description">{description}</p>
            </div>
            <div className="card__info">
                <span className={`card__category card__category--${category}`}><IoPricetagsOutline /> {category}</span>
                <Link to={`/tasks/${_id}`} className="btn btn--accent btn--sm">View</Link>
            </div>
        </div>
    );
};

export default TaskPreview;