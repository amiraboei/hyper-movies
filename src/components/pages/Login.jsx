import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { UserContext } from "../../context/UserContext";
import {  useNavigate } from "react-router-dom";

const Login = () => {
    const { login, session } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await login(formData.username, formData.password);

        if (result) {
            navigate("/profile");
        }
    };

    return (
        <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -bottom-20 -right-20"></div>
            <div className="relative w-full max-w-md">
                <div className="bg-white/[0.04] border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl">
                    <div className="text-center mb-8">
                        <Link to="/">
                            <h1 className="text-3xl font-bold text-white">Hyper<span className="text-rose-500">Movies</span></h1>
                        </Link>
                        <p className="text-[10px] sm:text-xs text-slate-500 tracking-[4px] mt-2">MOVIE REVIEW</p>
                    </div>
                    <div className="mb-7">
                        <h2 className="text-2xl font-bold text-white">Welcome Back 👋</h2>
                        <p className="text-slate-400 text-sm mt-2">Login to continue exploring movies</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm text-slate-300 mb-2 block">Username</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Your TMDB username" required className="w-full bg-black/30 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-slate-600 outline-none focus:border-rose-500/60 focus:ring-2 focus:ring-rose-500/10 transition" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm text-slate-300">Password</label>
                                <Link to="/forgot-password" className="text-xs text-rose-500 hover:text-rose-400 transition">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required className="w-full bg-black/30 border border-white/10 rounded-xl py-3.5 pl-11 pr-12 text-white placeholder:text-slate-600 outline-none focus:border-rose-500/60 focus:ring-2 focus:ring-rose-500/10 transition" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition">
                                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="accent-rose-500" />
                            <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer">Remember me</label>
                        </div>
                        <button type="submit" className="w-full bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-600/20 active:scale-[0.98]">LOGIN</button>
                    </form>
                    {session && <p className="text-center text-green-400 text-sm mt-5">You are logged in successfully ✅</p>}
                    <div className="flex items-center gap-4 my-7">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <span className="text-xs text-slate-600">OR</span>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    <p className="text-center text-sm text-slate-400">Don't have an account?<Link to="/signup" className="text-rose-500 hover:text-rose-400 ml-1 font-medium transition">Create account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;