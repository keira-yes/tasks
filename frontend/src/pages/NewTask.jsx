import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, createTask } from "../features/tasks/tasksSlice";
import BackNavigation from "../components/BackNavigation";
import Loader from "../components/Loader";

const NewTask = () => {
    const [formData, setFormData] = useState({
        category: "",
        description: ""
    });

    const { category, description } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isSuccess, errorMessage } = useSelector((state) => state.tasks);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }

        if (isSuccess) {
            toast.success(`Task was successfully created`);
            navigate("/tasks");
        }

        if (errorMessage || isSuccess) {
            dispatch(reset());
        }
    }, [isSuccess, errorMessage, dispatch, navigate]);

    const onChangeInput = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch(createTask(formData));
    }

    return (
        <>
            <BackNavigation url="/" />
            <div className="new-task">
                <h1 className="new-task__title page-title">Create a new task</h1>
                <div className="new-task__form">
                    <form className="form" name="new-task" onSubmit={onSubmit}>
                        <div className="form__field">
                            <label htmlFor="category" className="form__label">Category</label>
                            <select
                                name="category"
                                id="category"
                                className="form__select"
                                value={category}
                                onChange={onChangeInput}
                                required
                            >
                                <option value="">Select category</option>
                                <option value="development">Development</option>
                                <option value="languages">Languages</option>
                                <option value="sports">Sports</option>
                            </select>
                        </div>
                        <div className="form__field">
                            <label htmlFor="description" className="form__label">Description</label>
                            <textarea name="description"
                                      id="description"
                                      className="form__input"
                                      value={description}
                                      onChange={onChangeInput}
                                      placeholder="Add task description"
                                      required
                            >
                        </textarea>
                        </div>
                        <div className="form__submit">
                            <button type="submit" className="form__submit-btn btn btn--accent">Create</button>
                        </div>
                    </form>
                </div>
                {isLoading && <Loader />}
            </div>
        </>
    );
};

export default NewTask;
