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
    Logo,
    CommonDiv,
} from "../../Asset/Style/Common";

//import ImgTest from "../../Asset/Image/logo.gif"

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    const onValid = async ({ userid, password }) => {
        dispatch(ENABLE_LOADING());
        const data = await signin({ userid, password });

        if (data.status) {
            setRefreshToken(data.json.refresh_token);
            dispatch(SET_TOKEN(data.json.access_token));
            return navigate("/");
        } else {
            dispatch(SET_ERROR_MESSAGE(data.json))
        }
        dispatch(DISABLE_LOADING());
        setValue("password", "");
    }
    return (
            <UserContainer>
                <CommonDiv>
                    <UserTitle>Sign In</UserTitle>
                </CommonDiv>
                
                <UserBody>
                
                    <UserContents>
                        <CommonDiv className="flex justify-center items-center">
                            <Logo className="w-48 h-48 fill-black-900"/>
                        </CommonDiv>
                        <UserForm onSubmit={handleSubmit(onValid)}>
                            <CommonDiv>
                                <UserLabel htmlFor="id">
                                    Username
                                </UserLabel>
                                <UserMarginTop>
                                    <UserInput
                                        {...register("userid", { required: "???????????? ????????? ?????????." })}
                                        type="text"
                                    // value="test"
                                    />
                                    <ErrorMessage
                                        name="userid"
                                        errors={errors}
                                        render={
                                            ({ message }) =>
                                                <UserError className="text-rose-500">
                                                    {message}
                                                </UserError>
                                        }
                                    />
                                </UserMarginTop>
                            </CommonDiv>

                            <CommonDiv>
                                <UserLabel htmlFor="password">
                                    Password
                                </UserLabel>
                                <UserMarginTop>
                                    <UserInput
                                        {...register('password', { required: "??????????????? ????????? ?????????" })}
                                        type="password"
                                    //  value="asdfqwer1234"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        errors={errors}
                                        render={({ message }) =>
                                            <UserError className="text-rose-500">
                                                {message}
                                            </UserError>
                                        }
                                    />
                                </UserMarginTop>
                            </CommonDiv>

                            <CommonDiv>
                                <UserButton type="submit">
                                    Sign In
                                </UserButton>
                            </CommonDiv>
                        </UserForm>
                    </UserContents>
                    <UserButtonDiv>
                        <UserA href="./signup">
                            Sign Up
                        </UserA>
                    </UserButtonDiv>
                </UserBody>

            </UserContainer>

    );
}

export default SignIn;