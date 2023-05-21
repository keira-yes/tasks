import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main id="main">
                    <div className="main__container container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </div>
                </main>
                <Footer />
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
