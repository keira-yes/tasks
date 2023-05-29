import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerAsync, reset } from "../features/auth/authSlice";
import Loader from "../components/Loader";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isSuccess, errorMessage } = useSelector(state => state.auth);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }

        if (isSuccess && user) {
            toast.success(`User ${user.name} was successfully created`);
            navigate("/");
        }

        if (errorMessage || isSuccess) {
            dispatch(reset());
        }
    }, [user, isSuccess, errorMessage, dispatch, navigate]);

    const onChangeInput = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords are not equal");
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(registerAsync(userData));
        }
    }

    return (
        <div className="register">
            <h1 className="register__title page-title">Create your account</h1>
            <div className="register__form">
                <form className="form" name="register" onSubmit={onSubmit}>
                    <div className="form__field">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form__input"
                            name="name"
                            value={name}
                            placeholder="Name*"
                            onChange={onChangeInput}
                            required
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form__input"
                            name="email"
                            value={email}
                            placeholder="Email*"
                            onChange={onChangeInput}
                            required
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form__input"
                            name="password"
                            value={password}
                            placeholder="Password*"
                            onChange={onChangeInput}
                            required
                        />
                    </div>
                    <div className="form__field">
                        <label htmlFor="confirmPassword" className="sr-only">Confirm password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form__input"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm password*"
                            onChange={onChangeInput}
                            required
                        />
                    </div>
                    <div className="form__submit">
                        {isLoading && <div className="form__submit-loader"><Loader /></div>}
                        <button type="submit" className="form__submit-btn btn btn--accent">Create account</button>
                    </div>
                    <footer className="form__footer">Do you have an account? <Link to="/login">Login</Link></footer>
                </form>
            </div>
        </div>
    );
};

export default Register;