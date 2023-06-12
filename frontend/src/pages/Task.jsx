import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import {getTask, closeTask, deleteTask} from "../features/tasks/tasksSlice";
import Loader from "../components/Loader";
import BackNavigation from "../components/BackNavigation";

const Task = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { taskId } = useParams();
    const {
        task: {status, createdAt, description, category, _id},
        isLoading,
        errorMessage
    } = useSelector((state) => state.tasks);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }

        dispatch(getTask(taskId));
    }, [taskId, errorMessage, dispatch]);

    const onCloseTask = () => {
        dispatch(closeTask(taskId));
        toast.success("Task was successfully closed");
    }

    const onDeleteTask = () => {
        dispatch(deleteTask(taskId));
        toast.success("Task was successfully deleted");
        navigate("/tasks");
    }

    if (isLoading) return <Loader />

    return (
        <>
            <BackNavigation url="/tasks" />
            <div className="task">
                <header className="task__header">
                    <span className={`task__category category category--${category}`}><IoPricetagsOutline /> {category}</span>
                    <div className="task__header-block">
                        <span className={`task__status status status--${status}`}>{status}</span>
                        <button
                            type="button"
                            className="task__delete"
                            onClick={onDeleteTask}
                        >
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </header>
                <h1 className="task__title">{description}</h1>
                <div className="task__content">
                    <p className="task__info"><strong>Task ID:</strong> {_id}</p>
                    <p className="task__info"><strong>Created:</strong> {new Date(createdAt).toLocaleString()}</p>
                </div>
                {status !== "done" && (
                    <footer className="task__footer">
                        <button
                            type="button"
                            className="task__btn btn btn--bordered"
                            onClick={onCloseTask}
                        >
                            Close task
                        </button>
                    </footer>
                )}
            </div>
        </>
    );
};

export default Task;