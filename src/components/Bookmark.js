import React, {Component} from "react";

export default class Bookmark extends Component {
    render() {
        return (
            <button type="button" className="absolute right-3 top-3 flex justify-center items-center bg-[#10141E] bg-opacity-50 md:hover:bg-white w-8 h-8 rounded-full text-white group transition-colors cursor-pointer z-20">
                <svg width="12" height="14" fill={this.props.color} className="md:group-hover:fill-transparent md:group-hover:text-black transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="m10.711.771.01.004.01.005c.068.027.108.06.14.107.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014.326.326 0 0 1-.24-.091L6.356 9.235l-.524-.512-.524.512-4.011 3.915a.327.327 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z" stroke="currentColor" strokeWidth="1.5"/></svg>
            </button>
        );
    }
}