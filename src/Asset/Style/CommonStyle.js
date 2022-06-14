import { createGlobalStyle } from "styled-components/macro"

import "styled-components/macro"

import "../Font/SUIT.css"
import "../Font/SUIT-Variable.css"

const CommonStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: middle;
        height: 100vh;
    }
    body {
        font-weight: 300;
        font-family: 'SUIT', sans-serif;
        line-height: 1.2;
        background-color: white;
    }
`;

export default CommonStyle;