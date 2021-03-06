import { response } from "../Common";

export const signin = async (credentials) => {
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(credentials)
    };

    return await response("users/login/", option);
}

export const signup = async (credentials) => {
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(credentials)
    };

    return await response("users/register/", option);
}


export const signout = async (credentials, accessToken) => {
    const option = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    return await response("users/logout/", option);
}

export const whoami = async (accessToken) => {
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };

    return await response("users/", option);
}


export const renew = async (credentials, accessToken) => {
    const option = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    return await response("users/", option);
}
