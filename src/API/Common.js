import { response } from "express";
import { getRefreshToken } from "./Cookie/Cookie";

export const BASE_URL = "http://192.168.0.14:8000";
const TIME_OUT = 30 * 60 * 1000;

const error = {
    status: false,
    json: {
        error: ["연결이 원활하지 않습니다."]
    }
}

const request = (url, option) => {
    return fetch(`${BASE_URL}/${url}`, option);
}

const timeout = () => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), TIME_OUT));
}

const promise = async (url, option) => {
    return await Promise.race([
        request(url, option),
        timeout()
    ]);
}

const responseData = async (data) => {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : "";

    return {
        status,
        code,
        json
    }
}

const responseStatus = async (url, option) => {
    const data = await promise(url, option).catch(
        () => {
            return error;
        }
    );
    return data;
}

const credential = async (url, option) => {
    const refreshToken = getRefreshToken();
    const token = await refresh(refreshToken);
    const accessToken = await token.json();

    option.headers.Authorization = `Bearer ${accessToken.access_token}`;

    const data = await responseStatus(url, option);
    return responseData(data);
}

export const refresh = async (refreshToken) => {
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            refresh_token: refreshToken
        })
    }

    return await response("users/token/refresh/", option);
}

export const response = async (url, option) => {
    const data = await responseStatus(url, option);

    switch (data.status) {
        case false:
        case 500:
            return error;
        case 401:
            return credential(url, option)
        default:
            return responseData(data);
    }
}