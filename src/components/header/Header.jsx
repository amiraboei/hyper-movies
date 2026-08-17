import React, { useState } from 'react';
import Navigation from './navigation';
import SearchBox from './SearchBox/SearchBox';
import FollowUs from './FollowUs';
import HeaderSlider from './HeaderSlider';
import defaultBg from "../../assets/SwiperImage/bg.jfif";
import movie1 from "../../assets/SwiperImage/movie1.jfif";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [bg] = useState(defaultBg);
    const [hoverBg, setHoverBg] = useState(null);
    return (
        <header className={`w-full  bg-cover bg-center bg-no-repeat  transition-all duration-500 ${location.pathname !== '/' ? 'h-[180px]' : ''}`}
            style={{
                backgroundImage: `linear-gradient(
                    rgba(0,0,0,0.3),
                    rgba(0,0,0,0.6)
                ),  url(${hoverBg || bg})`
            }}
        >

            <div className={`w-[70%] mx-auto`}>

                <Navigation />
                <SearchBox />
                <div className={`${location.pathname !== "/" ? "hidden" : ""}`}>
                    <FollowUs />
                    <HeaderSlider setHoverBg={setHoverBg} />
                </div >


            </div>

        </header>
    );
}

export default Header;