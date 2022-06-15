import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Routes/Layout/Header";
import SignIn from "./Routes/User/SignIn";
import SignOut from "./Routes/User/SignOut";
import SignUp from "./Routes/User/SignUp";

function App(){
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/user/signin" element={<SignIn />} />
                <Route path="/user/signup" element={<SignUp />} />
                <Route path="/user/signout" element={<SignOut />} />
            </Routes>
        </Router>
    )
}

export default App