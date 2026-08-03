import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const FollowUs = () => {
    return (
         <section className='w-full flex justify-end items-center px-8 py-4 text-slate-300 text-sm '>
            <div className='flex items-center'>
                <span>FOLLOW US :</span>
                <ul className='flex gap-4 ml-2'>
                    <li><a href="#"></a><FaInstagram className='hover:text-rose-400'/></li>
                    <li><a href="#"></a><FaFacebook className='hover:text-rose-400'/></li>
                    <li><a href="#"></a><FaYoutube className='hover:text-rose-400'/></li>
                    <li><a href="#"></a><FaTwitterSquare className='hover:text-rose-400'/></li>
                </ul>
            </div>
            
        </section>
    );
}

export default FollowUs;
