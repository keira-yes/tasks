import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getTasks, reset } from "../features/tasks/tasksSlice";
import Loader from "../components/Loader";
import BackNavigation from "../components/BackNavigation";
import TaskPreview from "../components/TaskPreview";

const Tasks = () => {
    const dispatch = useDispatch();
    const { tasks, isLoading, isSuccess, errorMessage } = useSelector((state) => state.tasks);

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        }
    }, [isSuccess, dispatch]);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }

        dispatch(getTasks());
    }, [errorMessage, dispatch]);

    if (isLoading) return <Loader />

    return (
        <>
            <BackNavigation url="/" />
            <div className="tasks">
                <h1 className="tasks__title page-title">Tasks</h1>
                <div className="tasks__list">
                    {tasks.map(task => (
                        <TaskPreview key={task._id} task={task} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tasks;