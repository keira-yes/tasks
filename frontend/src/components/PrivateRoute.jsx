import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Loader from "./Loader";

const PrivateRoute = () => {
    const { isAuth, checkingAuthStatus } = useAuthStatus();

    if (checkingAuthStatus) {
        return <Loader />
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRoute;