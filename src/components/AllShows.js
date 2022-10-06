import React, {Component} from "react";
import Bookmark from "./Bookmark";

export default class AllShows extends Component {
    render() {
        const cards = [];
        for (let i = 1; i <= 24; i++) {
            cards.push(
                <div>
                    <div className="relative h-[29.334vw] max-h-[8.75rem] md:h-[18.23vw] md:max-h-[10.875rem] rounded-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('https://i0.wp.com/alexonthemap.com/wp-content/uploads/2019/02/woman-looking-at-hot-air-balloons-3278215.jpg?fit=1280%2C853&ssl=1')"}}>
                        <Bookmark color="transparent"/>
                        <div className="hidden md:block group p-4">
                            <div className="group-hover:opacity-100 opacity-0 flex justify-center items-center absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300">
                                <button type="button" className="flex justify-center items-center bg-white bg-opacity-25 text-white rounded-full w-[7.3125rem] h-12 cursor-pointer">
                                    <span className="flex items-center space-x-5">
                                        <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z"/></svg>
                                        <span>Play</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end mt-2 mb-1">
                        <p className="font-light text-white text-[0.6875rem] text-[0.8125rem] transition-all">2019 &#160;&#183;&#160; <svg width="10" height="10" fill="none" className="inline transform -translate-y-[0.06rem]" xmlns="http://www.w3.org/2000/svg"><path opacity=".75" fillRule="evenodd" clipRule="evenodd" d="M4.54 2.24H10V10H0V2.24h2.46L1.11.602l.78-.586 1.61 1.94L5.11 0l.78.601-1.35 1.64ZM1 3.21v5.82h5V3.21H1Zm7.5 3.88h-1v-.97h1v.97Zm-1-1.94h1v-.97h-1v.97Z" fill="#fff"/></svg>&#160; TV Series &#160;&#183;&#160; PG</p>
                        <h3 className="text-white font-medium text-sm md:text-lg transition-all">Dark Side of the Moon</h3>
                    </div>
                </div>
            );
        }
        return (
            <section>
                <h2 className="font-light text-xl md:text-[2rem] text-white pl-4 md:pl-[1.5625rem] mb-[1.3125rem] md:mb-7 transition-all">TV Series</h2>
                <div className="recommended-grid grid grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-x-7 md:gap-y-4 px-4 md:px-[1.5625rem] transition-all">
                    { cards }
                </div>
            </section>
        );
    }
}