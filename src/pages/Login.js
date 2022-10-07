import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const Login = ({title, funcNav}) => {
    useEffect(() => {
        document.title = title;
        funcNav(false);
    }, [title, funcNav])

    return (
        <div className="py-12 px-6">
            <header>
                <nav className="flex justify-center">
                    <Link to="/" className="text-[#FC4747] md:hover:text-white transition-colors">
                        <svg width="32" height="26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m25.6 0 3.2 6.4H24L20.8 0h-3.2l3.2 6.4H16L12.8 0H9.6l3.2 6.4H8L4.8 0H3.2A3.186 3.186 0 0 0 .016 3.2L0 22.4a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V0h-6.4Z" /></svg>
                    </Link>
                </nav>
            </header>
            <section className="bg-[#161D2F] text-white font-light rounded-xl px-6 pb-[2.125rem] pt-[1.125rem] mt-[3.625rem] max-w-[25rem] mx-auto md:mt-[4.5rem] md:px-[2rem] md:pt-[1.8125rem] transition-all">
                <h1 className="text-[2rem]">Login</h1>
                <form autoComplete="on">
                    <input id="email" name="email" className="block w-full border border-transparent border-b-[#5A698F] bg-transparent pb-[1.125rem] caret-red-500 pl-4 pr-4 mt-[2.0625rem] placeholder-[#87898D] focus:border-transparent focus:border-b-white focus:bg-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-transparent focus:placeholder:text-transparent text-base" placeholder="Email Address" type="email" autoComplete="on" required/>
                    <input id="login-password" name="password" className="block w-full border border-transparent border-b-[#5A698F] bg-transparent pb-[1.125rem] caret-red-500 pl-4 pr-4 mt-5 placeholder-[#87898D] focus:border-transparent focus:border-b-white focus:bg-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-transparent focus:placeholder:text-transparent text-base" placeholder="Password" type="password" autoComplete="on" required/>
                    <button type="submit" className="group text-[0.9375rem] bg-[#FC4747] md:hover:bg-white rounded-md w-full h-12 mb-[1.375rem] mt-10 transition-colors">
                        <span className="md:group-hover:text-black transition-colors">Login to your account</span>
                    </button>
                </form>
                <p className="text-[0.9375rem]">Don't have an account yet?&#160; <Link to="/registration" className="text-[#FC4747] md:hover:text-white transition-colors">Sign Up</Link></p>
            </section>
        </div>
    );
}

export default Login;