import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#09090b] border-t border-white/10 text-slate-400">
            <div className="w-[90%] max-w-7xl mx-auto py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block">
                            <h2 className="text-3xl font-black text-white">
                                Hyper<span className="text-rose-500">Movies</span>
                            </h2>
                        </Link>
                        <p className="text-sm text-slate-500 leading-7 max-w-md mt-4">
                            Discover the latest movies, explore popular titles and
                            find your next favorite movie with HyperMovies.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-rose-600 hover:border-rose-600 hover:text-white transition duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-rose-600 hover:border-rose-600 hover:text-white transition duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-rose-600 hover:border-rose-600 hover:text-white transition duration-300">
                                <FaYoutube />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-rose-600 hover:border-rose-600 hover:text-white transition duration-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-5">Navigation</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-rose-500 transition">Home</Link></li>
                            <li><Link to="/movies" className="hover:text-rose-500 transition">Movies</Link></li>
                            <li><Link to="/popular" className="hover:text-rose-500 transition">Popular</Link></li>
                            <li><Link to="/watchlist" className="hover:text-rose-500 transition">Watchlist</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-5">Information</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-rose-500 transition">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-rose-500 transition">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-rose-500 transition">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-rose-500 transition">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="h-px bg-white/10 my-10"></div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                    <p>© {new Date().getFullYear()} HyperMovies. All rights reserved.</p>
                    <p>Powered by Amir</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;