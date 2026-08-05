import React from 'react';
import { LiaStarSolid } from "react-icons/lia";
import movie1 from "../../assets/SwiperImage/movie1.jfif";

const MoviesCadrt = ({img}) => {
    return (
        <div className='relative aspect-2/3 overflow-hidden rounded-xl'>

            <img
                src={img}
                className='w-full h-full object-cover'
                alt=""
            />
            <div className='absolute bottom-0 w-full p-4 text-white bg-black/50'>

                <h3>NameMovie</h3>
                <div className='flex items-center gap-1'>
                    <LiaStarSolid className='text-yellow-400' />
                    <span>7.4/10</span>
                </div>

            </div>

        </div>


    );
}

export default MoviesCadrt;