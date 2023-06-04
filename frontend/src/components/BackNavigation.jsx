import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const BackNavigation = ({ url }) => {
    return (
        <Link to={url} className="btn btn--inline"><MdOutlineKeyboardBackspace /> Back</Link>
    );
};

export default BackNavigation;