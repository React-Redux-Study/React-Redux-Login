import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CommonStyle from "./Asset/Style/CommonStyle"
//TODO : cookie
//TODO : redux : store


ReactDOM.render(
    <>
        <CommonStyle/>
        <App />
    </>,
    document.getElementById("root")
);