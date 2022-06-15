import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./Routes/Auth/PrivateRoute";
import PublicRoute from "./Routes/Auth/PublicRoute";

import Header from "./Routes/Layout/Header";

import SignIn from "./Routes/User/SignIn";
import SignOut from "./Routes/User/SignOut";
import SignUp from "./Routes/User/SignUp";

import LoadingModal from "./Components/Modal/LoadingModal";
import Template from "./Routes/Template/Template";

function App(){
    return (
        <Router>
            <Header />
            <LoadingModal />
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/user/signout" element={<SignOut/>} />
                    <Route path="/" element={<Template/>} />
                </Route>
                <Route element={<PublicRoute />}>
                    <Route path="/user/signin" element={<SignIn />} />
                    <Route path="/user/signup" element={<SignUp />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default App