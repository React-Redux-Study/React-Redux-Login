import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

//Outlet : sub route를 구성한다. 하위목록 자식을 포함시킨다고 보면된다.
//Navigate : Navigate 는 특정 행동을 했을 때 해당 주소로 이동해줄 수 있게 만들어준다.
//useLocation :  현재의 URL을 대표하는 location 객체를 반환

import { Token } from "../../Util/Token/Token"

const PublicRoute = ( {children} ) => {
    const location = useLocation();
    const { isAuth } = Token(location.key);

    if(isAuth === "Success"){
        return (
            <Navigate to="/" state={{from:location}} />
        )
    }else if(isAuth === "Loaded"){
        
    }
    return children;
}