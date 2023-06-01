import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";

const Home = () => {
    return (
        <div className="home">
            <h1 className="home__title page-title">A better online to-do list app for work</h1>
            <p className="home__text">App makes it easier for a team to plan their work by using online to-do lists.</p>
            <div className="home__buttons">
                <Link to="/new-task" className="btn btn--transparent"><IoCreateOutline /> Create a new task</Link>
                <Link to="/tasks" className="btn btn--accent"><HiOutlineViewGrid /> My tasks</Link>
            </div>
        </div>
    );
};

export default Home;