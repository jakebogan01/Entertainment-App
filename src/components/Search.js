const Search = () => {
    return (
        <div>
            <label htmlFor="search" className="sr-only">Search for movies or TV series</label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[0.85rem]">
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/></svg>
                </div>
                <input id="search" name="search" className="block w-full border border-transparent bg-transparent py-[1.625rem] pl-12 pr-4 placeholder-[#87898D] focus:border-transparent focus:bg-transparent focus:text-white focus:placeholder-gray-500 focus:outline-none focus:ring-transparent text-base" placeholder="Search for movies or TV series" type="search" />
            </div>
        </div>
    );
}

export default Search;