import {Component} from "react";

export default class Search extends Component {
    render() {
        return (
            <div className="1440:mt-16 transition-all">
                <label htmlFor="search" className="sr-only">Search for movies or TV series</label>
                <div className="relative">
                    <div className="search-icon pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 md:pl-[1.5625rem] transition-all">
                        <svg className="hidden md:block" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m19.08 17.2 4.533 4.52a1.333 1.333 0 0 1 0 1.893 1.333 1.333 0 0 1-1.893 0L17.2 19.08a10.56 10.56 0 0 1-6.533 2.253C4.776 21.333 0 16.558 0 10.667S4.776 0 10.667 0c5.89 0 10.666 4.776 10.666 10.667A10.56 10.56 0 0 1 19.08 17.2ZM10.667 2.667a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" fill="#fff"/></svg>
                        <svg className="h-5 w-5 text-white md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/></svg>
                    </div>
                    <input id="search" name="search" className="block w-full outline-none outline-0 border-none border-0 border-transparent bg-transparent my-[1.625rem] md:my-9 caret-red-500 pl-12 md:pl-16 mr-4 md:mr-[1.5625rem] placeholder-[#87898D] focus:border-transparent focus:bg-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-transparent focus:placeholder:text-transparent font-light text-base md:text-2xl transition-all" placeholder={this.props.title} type="search"/>
                </div>
            </div>
        );
    }
}