import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";


const Navigation = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <>
            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 text-slate-300">

                <div className="flex items-center gap-4 lg:gap-10">

                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        Heyper
                        <span className="text-rose-500">Movies</span>

                        <p className="text-[10px] sm:text-xs text-center text-slate-600">
                            MOVIE REVIEW
                        </p>
                    </h1>

                    <ul className="hidden lg:flex gap-6 xl:gap-8">
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV SHOW</a></li>
                        <li><a href="#">PEOPLE</a></li>
                        <li><a href="#">MOVE</a></li>
                    </ul>

                </div>

                <div>
                    <ul className="flex items-center gap-3 sm:gap-5">

                        <li className="hidden sm:block">
                            <a href="#">LOGIN</a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hidden sm:block bg-rose-800 hover:bg-rose-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white transition">
                                SIGN UP
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="sm:hidden">
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)}><IoMenu size={30} /></button>

                </div>

            </nav>
            <div className={` md:hidden bg-slate-100 text-center transition-all duration-500  border-slate-100  ${isOpenMenu ? "bg-white/20 backdrop-blur-md rounded-2xl  border-t-2 p-4" : " py-0 h-0 overflow-hidden border-none"}`}>
                <ul className="flex flex-col gap-4">
                    <la><a href="#">MOVIES</a></la>
                    <la><a href="#">TV SHOWS</a></la>
                    <la><a href="#">PEOPLE</a></la>
                    <la><a href="#">MORE</a></la>
                    <div className="flex gap-3 justify-center border-t-2 border-slate-300 py-3">
                        <li className="">
                            <a href="#">LOGIN</a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className=" bg-rose-800 hover:bg-rose-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white transition">
                                SIGN UP
                            </a>
                        </li>
                    </div>
                </ul>

            </div>
        </>

    );
};

export default Navigation;