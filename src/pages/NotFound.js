import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const NotFound = ({title, funcNav}) => {
    useEffect(() => {
        document.title = title;
        funcNav(false);
    }, [])

    return (
        <div className="py-12 px-6">
            <header>
                <nav className="flex justify-center text-[#FC4747] md:hover:text-white transition-colors">
                    <Link to="/">
                        <svg width="32" height="26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m25.6 0 3.2 6.4H24L20.8 0h-3.2l3.2 6.4H16L12.8 0H9.6l3.2 6.4H8L4.8 0H3.2A3.186 3.186 0 0 0 .016 3.2L0 22.4a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V0h-6.4Z" /></svg>
                    </Link>
                </nav>
            </header>
            <section className="text-white font-light px-6 pt-[1.125rem] mt-[3.625rem] text-center">
                <h1 className="text-[2rem]">Sorry, <br />Page Not Found</h1>
                <p className="text-[0.9375rem]">Lets get you back <Link to="/" className="text-[#FC4747] md:hover:text-white transition-colors">home</Link></p>
            </section>
        </div>
    );
}

export default NotFound;