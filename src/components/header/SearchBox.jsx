import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-4 text-slate-100">

            <div className="relative w-full">

                <input
                    type="text"
                    placeholder="Search for movies..."
                    className=" w-full bg-slate-700 border-2 border-slate-500 rounded-xl outline-none py-3 pl-4 pr-12 text-base sm:text-lg lg:text-xl "
                />

                <CiSearch size={28} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"/>

            </div>

        </section>
    );
};

export default SearchBox;