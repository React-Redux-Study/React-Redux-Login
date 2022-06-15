import { Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

// Fragment : Fragments는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화할 수 있음
// useNavigate :  양식이 제출되거나 특정 event가 발생할 때, url을 조작할 수 있는 interface를 제공
// useLocation : 현재의 URL을 대표하는 location 객체를 반환

import { Disclosure, Menu, Transition } from "@headlessui/react";

import { RiGlobalLine } from "react-icons/ri";

//import { classNames } from "../../Util/Common"

import { ReactComponent as Logo } from "../../Asset/Image/logo.svg";

import {
    HeaderArea,
    HeaderImages,
    HeaderItems,
    HeaderItem,
    HeaderMenu,
    HeaderAvatar,
    HeaderButton,
    HeaderIcon,
    HeaderIconButton,
    HeaderIconAvatar
} from "../../Asset/Style/Layout/Header";

import {
    CommonDiv,
    CommonDivFlex
} from "../../Asset/Style/Common";


const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Disclosure as="nav" className="bg-white border-b border-solid border-gray-200" >
            {
                ({ open }) => {
                    <HeaderArea>
                        <HeaderItems>
                            {
                                location.pathname.includes("user") ? (
                                    <CommonDivFlex></CommonDivFlex>
                                ) : (
                                    <CommonDivFlex>
                                        <HeaderImages>
                                            <Link to="/">
                                                <Logo style={{ width: "5rem", height: "5rem", overflow: "hidden" }} />
                                            </Link>
                                        </HeaderImages>
                                        <HeaderItem>
                                            <HeaderMenu
                                                onClick={() => navigate("/")}
                                            >
                                                Template
                                            </HeaderMenu>
                                        </HeaderItem>
                                    </CommonDivFlex>
                                )
                            }
                            <HeaderIcon>
                                <HeaderIconButton>
                                    <RiGlobalLine className="h-6 w-6" aria-hidden="true" />
                                </HeaderIconButton>
                                {
                                    location.pathname.includes("user") ? null : (
                                        <Menu as="div" className="ml-3 relative z-10">
                                            <CommonDiv>
                                                <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    <HeaderIconAvatar>
                                                        <HeaderAvatar fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </HeaderAvatar>
                                                    </HeaderIconAvatar>
                                                </Menu.Button>
                                            </CommonDiv>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {/*<Menu.Item>
                                                                {
                                                                    ({active}) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(active ? "bg-gray-100" : "" , "block px-4 py-2 text-sm text-gray-700")}
                                                                        >
                                                                            profile
                                                                        </a>
                                                                    )
                                                                }
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {
                                                                    ({active}) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(active ? "bg-gray-100" : "" , "block px-4 py-2 text-sm text-gray-700")}
                                                                        >
                                                                            profile
                                                                        </a>
                                                                    )
                                                                }
                                                            </Menu.Item> */}
                                                </Menu.Items>
                                                <Menu.Item>
                                                    <HeaderButton onClick={() => navigate('/user/signout')}>
                                                        로그아웃
                                                    </HeaderButton>
                                                </Menu.Item>
                                            </Transition>
                                        </Menu>
                                    )
                                }
                            </HeaderIcon>
                        </HeaderItems>
                    </HeaderArea>

                }
            }
        </Disclosure>
    )

};

export default Header;