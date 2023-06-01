import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [checkingAuthStatus, setCheckingAuthStatus] = useState(true);

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }

        setCheckingAuthStatus(false);
    }, [user]);

    return { isAuth, checkingAuthStatus }
}