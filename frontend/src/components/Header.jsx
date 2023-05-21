import { Link } from "react-router-dom";
import { CiLogin, CiUser } from "react-icons/ci";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <Link to='/' className="header__logo">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.3757 9.375H11.459V13.5417H34.3757C35.5215 13.5417 36.459 14.4792 36.459 15.625V36.4583H23.959V40.625H40.6257V15.625C40.6257 12.1875 37.8132 9.375 34.3757 9.375Z" fill="#AB54DB" fillOpacity="0.15"/>
                        <path d="M16.6667 6.25H6.25V16.6667H16.6667V6.25Z" fill="#AB54DB"/>
                        <path d="M43.7487 17.7084H33.332V28.125H43.7487V17.7084Z" fill="#00A389"/>
                        <path d="M27.0827 33.3334H16.666V43.75H27.0827V33.3334Z" fill="#EF9A91"/>
                        <path d="M27.0833 16.6667C29.9598 16.6667 32.2917 14.3348 32.2917 11.4583C32.2917 8.58185 29.9598 6.25 27.0833 6.25C24.2069 6.25 21.875 8.58185 21.875 11.4583C21.875 14.3348 24.2069 16.6667 27.0833 16.6667Z" fill="#58CDFF"/>
                        <path d="M38.5404 43.75C41.4168 43.75 43.7487 41.4182 43.7487 38.5417C43.7487 35.6652 41.4168 33.3334 38.5404 33.3334C35.6639 33.3334 33.332 35.6652 33.332 38.5417C33.332 41.4182 35.6639 43.75 38.5404 43.75Z" fill="#FFBB54"/>
                    </svg>
                </Link>
                <nav className="header__nav">
                    <Link to="/login" className="header__link"><CiLogin />Login</Link>
                    <Link to="/register" className="header__link"><CiUser />Register</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;