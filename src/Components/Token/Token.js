import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import useInterval from "../../Hook/Interval"

import { getRefreshToken, removeRefreshToken } from "../../API/Cookie/Cookie";
import { refresh, TOKEN_REDIRECT_TIME, TOKEN_TIME_OUT } from "../../API/Common";

import { DELETE_TOKEN, SET_TOKEN } from "../../Store/Token/Token";

const Token = () => {
    const refreshToken = getRefreshToken();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = async() => {
        const data = await refresh(refreshToken);

        if(data.status){
            const token = data.json.access_token;
            dispatch(SET_TOKEN(token));
        }else{
            removeRefreshToken();
            dispatch(DELETE_TOKEN());
            navigate("/user/signin")
        }
    }

    useInterval( () => {
        token();
    }, TOKEN_TIME_OUT - TOKEN_REDIRECT_TIME )

    return (<></>);
}

export default Token;