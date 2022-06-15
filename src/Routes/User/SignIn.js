import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { SET_TOKEN } from "../../Store/Token/Token";
import { SET_ERROR_MESSAGE } from "../../Store/Message/Message";
import { DISABLE_LOADING, ENABLE_LOADING } from "../../Store/Loading/Loading"

import { signin } from "../../API/User/User"
import { setRefreshToken } from "../../API/Cookie/Cookie";

import {
    UserContainer,
    UserTitle,
    UserBody,
    UserContents,
    UserForm,
    UserLabel,
    UserMarginTop,
    UserInput,
    UserError,
    UserButton,
    UserButtonDiv,
    UserA
} from "../../Asset/Style/User/User";

import {
    CommonDiv,
} from "../../Asset/Style/Common";


const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register, setValue, formState: {errors}, handleSubmit} = useForm();

    const onValid = async( {userid, password} ) => {
        dispatch(ENABLE_LOADING());
        const data = await signin({userid, password});

        if(data.status){
            setRefreshToken(data.json.refresh_token);
            dispatch(SET_TOKEN(data.json.access_token));
            return navigate("/");
        }else{
            dispatch(SET_ERROR_MESSAGE(data.json))
        }
        dispatch(DISABLE_LOADING());
        setValue("password", "");
    }

    return (
        <UserContainer>
            <CommonDiv>
                <UserTitle>로그인</UserTitle>
            </CommonDiv>

            <UserBody>
                <UserContents>
                    <UserForm onSubmit={handleSubmit(onValid)}>
                        <CommonDiv>
                            <UserLabel htmlFor="id">
                                아이디
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput 
                                    { ...register("userid", { required: "아이디를 입력해 주세요." })}
                                    type="text"
                                />
                                <ErrorMessage
                                    name="userid"
                                    errors={errors}
                                    render={
                                        ({message}) =>
                                        <UserError className="text-rose-500">
                                            {message}
                                        </UserError>
                                    }
                                />
                            </UserMarginTop>
                        </CommonDiv>

                        <CommonDiv>
                            <UserLabel htmlFor="password">
                                비밀번호
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput
                                     {...register('password', { required: "비밀번호를 입력해 주세요" })}
                                     type="password"
                                />
                                <ErrorMessage
                                    name="password"
                                    errors={errors}
                                    render={ ({message}) =>
                                        <UserError className="text-rose-500">
                                            {message}
                                        </UserError>
                                    }
                                />
                            </UserMarginTop>
                        </CommonDiv>
                        
                        <CommonDiv>
                            <UserButton type="submit">
                                로그인
                            </UserButton>
                        </CommonDiv>
                    </UserForm>
                </UserContents>
                <UserButtonDiv>
                    <UserA href="./signup">
                        계정 만들기
                    </UserA>
                </UserButtonDiv>
            </UserBody>

        </UserContainer>
    );
}

export default SignIn;