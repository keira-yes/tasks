import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTask from "./pages/NewTask";
import Tasks from "./pages/Tasks";
import Task from "./pages/Task";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

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
                            <Route path="/new-task" element={<PrivateRoute />}>
                                <Route path="/new-task" element={<NewTask />} />
                            </Route>
                            <Route path="/tasks" element={<PrivateRoute />}>
                                <Route path="/tasks" element={<Tasks />} />
                            </Route>
                            <Route path="/tasks/:taskId" element={<PrivateRoute />}>
                                <Route path="/tasks/:taskId" element={<Task />} />
                            </Route>
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
