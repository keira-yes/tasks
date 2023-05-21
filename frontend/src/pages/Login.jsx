import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../features/auth/authSlice";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const onChangeInput = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();

        const userData = {
            email,
            password
        }
        dispatch(loginAsync(userData));
    }

    return (
        <div className="login">
            <h1 className="login__title page-title">Log in to your account</h1>
            <div className="login__form">
                <form className="form" name="login" onSubmit={onSubmit}>
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
                    <div className="form__submit">
                        <button type="submit" className="form__submit-btn btn btn--accent">Login</button>
                    </div>
                    <footer className="form__footer">Don't have an account? <Link to="/register">Signup</Link></footer>
                </form>
            </div>
        </div>
    );
};

export default Login;