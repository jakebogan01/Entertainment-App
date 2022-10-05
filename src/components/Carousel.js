import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/carousel.css';

export default class Carousel extends Component {
    render() {
        const settings = {
            className: "slider variable-width",
            dots: false,
            speed: 500,
            infinite: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            variableWidth: true
        };
        return (
            <section className="">
                <h2 className="font-light text-xl text-white pl-4 mb-4">Trending</h2>
                <Slider {...settings}>
                    <div>
                        <div className="relative flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <button type="button" className="absolute right-3 top-3 flex justify-center items-center bg-[#10141E] bg-opacity-50 hover:bg-white w-8 h-8 rounded-full text-white group transition-colors cursor-pointer z-20">
                                <svg width="12" height="14" fill="none" className="group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="m10.711.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014.326.326 0 0 1-.24-.091L6.356 9.235l-.524-.512-.524.512-4.011 3.915a.327.327 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                            </button>
                            <div className="group p-4">
                                <div className="group-hover:opacity-100 opacity-0 flex justify-center items-center absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300">
                                    <button type="button" className="flex justify-center items-center bg-white bg-opacity-25 text-white rounded-full w-[7.3125rem] h-12 cursor-pointer">
                                        <span className="flex items-center space-x-5">
                                            <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z" /></svg>
                                            <span>Play</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="group-hover:opacity-0 flex flex-col justify-end transition-opacity duration-300">
                                    <p className="font-light text-white text-xs">2019 &#160;&#183;&#160; <svg width="12" height="12" fill="none" className="inline transform -translate-y-[0.06rem]" xmlns="http://www.w3.org/2000/svg"><path opacity=".75" fillRule="evenodd" clipRule="evenodd" d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2Zm0 1.2H1.2v1.2h1.2V6.6Zm8.4-1.2H9.6V4.2h1.2v1.2Zm0 1.2H9.6v1.2h1.2V6.6Zm0-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM2.4 1.2h-.756a.444.444 0 0 0-.444.444V2.4h1.2V1.2Zm-1.2 9.156V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.156.444a.444.444 0 0 0 .444-.444V9.6H9.6v1.2h.756Z" fill="#fff"/></svg>&#160; Movie &#160;&#183;&#160; PG</p>
                                    <h3 className="text-white font-medium text-[0.9375rem]">Beyond Earth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <button type="button" className="absolute right-3 top-3 flex justify-center items-center bg-[#10141E] bg-opacity-50 hover:bg-white w-8 h-8 rounded-full text-white group transition-colors cursor-pointer z-20">
                                <svg width="12" height="14" fill="none" className="group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="m10.711.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014.326.326 0 0 1-.24-.091L6.356 9.235l-.524-.512-.524.512-4.011 3.915a.327.327 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                            </button>
                            <div className="group p-4">
                                <div className="group-hover:opacity-100 opacity-0 flex justify-center items-center absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300">
                                    <button type="button" className="flex justify-center items-center bg-white bg-opacity-25 text-white rounded-full w-[7.3125rem] h-12 cursor-pointer">
                                        <span className="flex items-center space-x-5">
                                            <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z" /></svg>
                                            <span>Play</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="group-hover:opacity-0 flex flex-col justify-end transition-opacity duration-300">
                                    <p className="font-light text-white text-xs">2019 &#160;&#183;&#160; <svg width="12" height="12" fill="none" className="inline transform -translate-y-[0.06rem]" xmlns="http://www.w3.org/2000/svg"><path opacity=".75" fillRule="evenodd" clipRule="evenodd" d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2Zm0 1.2H1.2v1.2h1.2V6.6Zm8.4-1.2H9.6V4.2h1.2v1.2Zm0 1.2H9.6v1.2h1.2V6.6Zm0-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM2.4 1.2h-.756a.444.444 0 0 0-.444.444V2.4h1.2V1.2Zm-1.2 9.156V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.156.444a.444.444 0 0 0 .444-.444V9.6H9.6v1.2h.756Z" fill="#fff"/></svg>&#160; Movie &#160;&#183;&#160; PG</p>
                                    <h3 className="text-white font-medium text-[0.9375rem]">Beyond Earth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <button type="button" className="absolute right-3 top-3 flex justify-center items-center bg-[#10141E] bg-opacity-50 hover:bg-white w-8 h-8 rounded-full text-white group transition-colors cursor-pointer z-20">
                                <svg width="12" height="14" fill="none" className="group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="m10.711.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014.326.326 0 0 1-.24-.091L6.356 9.235l-.524-.512-.524.512-4.011 3.915a.327.327 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                            </button>
                            <div className="group p-4">
                                <div className="group-hover:opacity-100 opacity-0 flex justify-center items-center absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300">
                                    <button type="button" className="flex justify-center items-center bg-white bg-opacity-25 text-white rounded-full w-[7.3125rem] h-12 cursor-pointer">
                                        <span className="flex items-center space-x-5">
                                            <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z" /></svg>
                                            <span>Play</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="group-hover:opacity-0 flex flex-col justify-end transition-opacity duration-300">
                                    <p className="font-light text-white text-xs">2019 &#160;&#183;&#160; <svg width="12" height="12" fill="none" className="inline transform -translate-y-[0.06rem]" xmlns="http://www.w3.org/2000/svg"><path opacity=".75" fillRule="evenodd" clipRule="evenodd" d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2Zm0 1.2H1.2v1.2h1.2V6.6Zm8.4-1.2H9.6V4.2h1.2v1.2Zm0 1.2H9.6v1.2h1.2V6.6Zm0-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM2.4 1.2h-.756a.444.444 0 0 0-.444.444V2.4h1.2V1.2Zm-1.2 9.156V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.156.444a.444.444 0 0 0 .444-.444V9.6H9.6v1.2h.756Z" fill="#fff"/></svg>&#160; Movie &#160;&#183;&#160; PG</p>
                                    <h3 className="text-white font-medium text-[0.9375rem]">Beyond Earth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <button type="button" className="absolute right-3 top-3 flex justify-center items-center bg-[#10141E] bg-opacity-50 hover:bg-white w-8 h-8 rounded-full text-white group transition-colors cursor-pointer z-20">
                                <svg width="12" height="14" fill="none" className="group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="m10.711.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014.326.326 0 0 1-.24-.091L6.356 9.235l-.524-.512-.524.512-4.011 3.915a.327.327 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                            </button>
                            <div className="group p-4">
                                <div className="group-hover:opacity-100 opacity-0 flex justify-center items-center absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300">
                                    <button type="button" className="flex justify-center items-center bg-white bg-opacity-25 text-white rounded-full w-[7.3125rem] h-12 cursor-pointer">
                                        <span className="flex items-center space-x-5">
                                            <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z" /></svg>
                                            <span>Play</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="group-hover:opacity-0 flex flex-col justify-end transition-opacity duration-300">
                                    <p className="font-light text-white text-xs">2019 &#160;&#183;&#160; <svg width="12" height="12" fill="none" className="inline transform -translate-y-[0.06rem]" xmlns="http://www.w3.org/2000/svg"><path opacity=".75" fillRule="evenodd" clipRule="evenodd" d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2Zm0 1.2H1.2v1.2h1.2V6.6Zm8.4-1.2H9.6V4.2h1.2v1.2Zm0 1.2H9.6v1.2h1.2V6.6Zm0-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM2.4 1.2h-.756a.444.444 0 0 0-.444.444V2.4h1.2V1.2Zm-1.2 9.156V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.156.444a.444.444 0 0 0 .444-.444V9.6H9.6v1.2h.756Z" fill="#fff"/></svg>&#160; Movie &#160;&#183;&#160; PG</p>
                                    <h3 className="text-white font-medium text-[0.9375rem]">Beyond Earth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex flex-col bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <button type="button" className="absolute right-3 top-3 flex justify-center items-center bg-[#10141E] bg-opacity-50 hover:bg-white w-8 h-8 rounded-full text-white group transition-colors cursor-pointer z-20">
                                <svg width="12" height="14" fill="none" className="group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="m10.711.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014.326.326 0 0 1-.24-.091L6.356 9.235l-.524-.512-.524.512-4.011 3.915a.327.327 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                            </button>
                            <div className="group p-4">
                                <div className="group-hover:opacity-100 opacity-0 flex justify-center items-center absolute inset-0 w-full h-full bg-black bg-opacity-50 z-10 transition-opacity duration-300">
                                    <button type="button" className="flex justify-center items-center bg-white bg-opacity-25 text-white rounded-full w-[7.3125rem] h-12 cursor-pointer">
                                        <span className="flex items-center space-x-5">
                                            <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.713 6.713 0 15 0c8.288 0 15 6.713 15 15 0 8.288-6.712 15-15 15-8.287 0-15-6.712-15-15Zm21-.5L12 8v13l9-6.5Z" /></svg>
                                            <span>Play</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="group-hover:opacity-0 flex flex-col justify-end transition-opacity duration-300">
                                    <p className="font-light text-white text-xs">2019 &#160;&#183;&#160; <svg width="12" height="12" fill="none" className="inline transform -translate-y-[0.06rem]" xmlns="http://www.w3.org/2000/svg"><path opacity=".75" fillRule="evenodd" clipRule="evenodd" d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2Zm0 1.2H1.2v1.2h1.2V6.6Zm8.4-1.2H9.6V4.2h1.2v1.2Zm0 1.2H9.6v1.2h1.2V6.6Zm0-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM2.4 1.2h-.756a.444.444 0 0 0-.444.444V2.4h1.2V1.2Zm-1.2 9.156V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.156.444a.444.444 0 0 0 .444-.444V9.6H9.6v1.2h.756Z" fill="#fff"/></svg>&#160; Movie &#160;&#183;&#160; PG</p>
                                    <h3 className="text-white font-medium text-[0.9375rem]">Beyond Earth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}