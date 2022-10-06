import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/carousel.css';
import Bookmark from "./Bookmark";

export default class Trending extends Component {
    render() {
        const cards = [];
        for (let i = 1; i <= 5; i++) {
            cards.push(
                <div>
                    <div className="relative flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                        <Bookmark color="transparent"/>
                        <div className="group p-4">
                            <div className="md:group-hover:opacity-100 opacity-0 flex justify-center items-center absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300">
                                <button type="button" className="flex justify-center items-center bg-white bg-opacity-25 text-white rounded-full w-[7.3125rem] transform 1440:scale-125 h-12 cursor-pointer">
                                        <span className="flex items-center space-x-5">
                                            <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z" /></svg>
                                            <span>Play</span>
                                        </span>
                                </button>
                            </div>
                            <div className="md:group-hover:opacity-0 flex flex-col justify-end transition-opacity duration-300">
                                <p className="font-light text-white text-xs md:text-[0.9375rem] transition-all">2019 &#160;&#183;&#160; <svg width="12" height="12" fill="none" className="inline transform -translate-y-[0.06rem]" xmlns="http://www.w3.org/2000/svg"><path opacity=".75" fillRule="evenodd" clipRule="evenodd" d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2Zm0 1.2H1.2v1.2h1.2V6.6Zm8.4-1.2H9.6V4.2h1.2v1.2Zm0 1.2H9.6v1.2h1.2V6.6Zm0-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM2.4 1.2h-.756a.444.444 0 0 0-.444.444V2.4h1.2V1.2Zm-1.2 9.156V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.156.444a.444.444 0 0 0 .444-.444V9.6H9.6v1.2h.756Z" fill="#fff"/></svg>&#160; Movie &#160;&#183;&#160; PG</p>
                                <h3 className="text-white font-medium text-[0.9375rem] md:text-2xl transition-all">Beyond Earth</h3>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        const settings = {
            className: "slider variable-width",
            dots: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 8000,
            cssEase: "ease-in-out",
            pauseOnHover: true,
            infinite: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            variableWidth: true
        };
        return (
            <section>
                <h2 className="title font-light text-xl md:text-[2rem] text-white pl-4 md:pl-[1.5625rem] mb-4 md:mb-7 transition-all">Trending</h2>
                <Slider {...settings}>
                    { cards }
                </Slider>
            </section>
        );
    }
}