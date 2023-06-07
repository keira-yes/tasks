import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getTask, reset } from "../features/tasks/tasksSlice";
import Loader from "../components/Loader";
import BackNavigation from "../components/BackNavigation";

const Task = () => {
    const dispatch = useDispatch();
    const { taskId } = useParams();
    const { task, isLoading, isSuccess, errorMessage } = useSelector((state) => state.tasks);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }

        dispatch(getTask(taskId));
    }, [taskId, errorMessage, dispatch]);

    if (isLoading) return <Loader />

    return (
        <div className="task">
            <BackNavigation url="/tasks" />
            <h1 className="task__title page-title">Task</h1>
        </div>
    );
};

export default Task;