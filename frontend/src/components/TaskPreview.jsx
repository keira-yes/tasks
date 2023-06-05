import { Link } from "react-router-dom";

const TaskPreview = ({ task }) => {
    const { createdAt, description, status, _id } = task;

    return (
        <div className="card">
            <div className="card__content">
                <span className="card__date">{new Date(createdAt).toLocaleString()}</span>
                <p className="card__description">{description}</p>
            </div>
            <div className="card__info">
                <span className={`card__status card__status--${status}`}>{status}</span>
                <Link to={`/tasks/${_id}`}>View</Link>
            </div>
        </div>
    );
};

export default TaskPreview;