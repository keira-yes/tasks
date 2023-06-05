import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getTasks, reset } from "../features/tasks/tasksSlice";
import Loader from "../components/Loader";
import BackNavigation from "../components/BackNavigation";

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
        dispatch(getTasks());

        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage, dispatch]);

    return (
        <div className="tasks">
            <BackNavigation url="/" />
            <h1 className="tasks__title page-title">Tasks</h1>
            {isLoading && <Loader />}
        </div>
    );
};

export default Tasks;