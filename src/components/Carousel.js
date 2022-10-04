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
            <div className="">
                <h2 className="font-light text-xl text-white pl-4 mb-4">Trending</h2>
                <Slider {...settings}>
                    <div>
                        <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <p>100</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <p>100</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <p>100</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <p>100</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.outsideonline.com/wp-content/uploads/2020/02/03/traveling-with-anxiety_h.jpg')"}}>
                            <p>100</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}