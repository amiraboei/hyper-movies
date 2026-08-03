import React from 'react';
import { CiSearch } from "react-icons/ci";


const SearchBox = () => {
    return (
        <section className='w-full flex justify-between items-center px-8 py-4 text-slate-100'>
            <div className='relative w-full'>
                <input type="text" className='w-full bg-slate-600 text-xl p-2 border-2 rounded border-slate-900 outline-none'  placeholder='Search for movies...'/>
                <CiSearch className='absolute right-0 top-1/2 -translate-y-1/2' size={30} />

            </div>

        </section>
    );
}

export default SearchBox;
