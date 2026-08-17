import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const menuItems = [
    {
        path: '/movies',
        text: 'MOVIES'
    },
    {
        path: '/tv-show',
        text: 'TV SHOWS'
    },
    {
        path: '/people',
        text: 'PEOPLE'
    },
    {
        path: '/more',
        text: 'MORE'
    }
]
const Navigation = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { user ,logout } = useContext(UserContext);
    console.log("USER:", user);
    function activeClass({ isActive }) {
        return isActive ? "text-rose-500" : "hover:text-slate-50";
    }
    return (
        <>
            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 text-slate-300">

                <div className="flex items-baseline gap-4 lg:gap-10">
                    <Link to='/'>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                            Heyper
                            <span className="text-rose-500">Movies</span>
                            <p className="text-[10px] sm:text-xs text-center text-slate-600">
                                MOVIE REVIEW
                            </p>
                        </h1>
                    </Link>



                    <ul className="hidden lg:flex gap-6 xl:gap-8">
                        {menuItems.map(item => {
                            return (<li key={item.path}><NavLink to={item.path} className={activeClass} >{item.text}</NavLink></li>)
                        })}
                    </ul>

                </div>

                <div>
                    {user?.username ? (
                        <div className="flex flex-row gap-2 items-center">
                            <div>{user.username}</div>
                            <button onClick={logout} className="hidden sm:block bg-rose-800 hover:bg-rose-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white transition">Log Out</button>
                        </div>

                    ) : (
                        <ul className="flex items-baseline gap-3 sm:gap-5">

                            <li className="hidden sm:block">
                                <NavLink to="/login" className="hover:text-slate-50">
                                    LOGIN
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/signup"
                                    className="hidden sm:block bg-rose-800 hover:bg-rose-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white transition"
                                >
                                    SIGN UP
                                </NavLink>
                            </li>

                        </ul>
                    )}
                </div>
                <div className="sm:hidden">
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)}><IoMenu size={30} /></button>

                </div>

            </nav>
            <div className={` md:hidden bg-slate-100 text-center transition-all duration-500  border-slate-100  ${isOpenMenu ? "bg-white/20 backdrop-blur-md rounded-2xl  border-t-2 p-4" : " py-0 h-0 overflow-hidden border-none"}`}>
                <ul className="flex flex-col gap-4">
                    {menuItems.map(item => {
                        return (
                            <li key={item.path}><NavLink to={item.path} onClick={() => setIsOpenMenu(false)} >{item.text} </NavLink></li>
                        )
                    })}
                    <div className="flex gap-3 justify-center border-t-2 border-slate-300 py-3">
                        <li className="">
                            <NavLink to="#">LOGIN</NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="#"
                                className=" bg-rose-800 hover:bg-rose-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white transition">
                                SIGN UP
                            </NavLink>
                        </li>
                    </div>
                </ul>

            </div>
        </>

    );
};

export default Navigation;