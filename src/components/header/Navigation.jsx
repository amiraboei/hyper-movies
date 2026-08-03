import React from 'react';

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 text-slate-300">

            <div className="flex items-center gap-10">
                <h1 className='text-3xl'>Heyper<span className='text-rose-500'>Movies</span> <p className='text-xs text-center text-slate-600'>MOVIE REVIEW</p></h1>

                <ul className="flex gap-6">
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV SHOW</a></li>
                    <li><a href="#">PEOPLE</a></li>
                    <li><a href="#">MOVE</a></li>
                </ul>
            </div>

            <ul className="flex gap-6">
                <li><a href="#">LOGIN</a></li>
                <li><a href="#" className='bg-rose-800 hover:bg-rose-500 px-6 py-3 rounded-2xl text-whites '>SIGN UP</a></li>
            </ul>

        </nav>
    );
}

export default Navigation;
