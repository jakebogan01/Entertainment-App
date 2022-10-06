import {Link, NavLink} from "react-router-dom";
import user from '../assets/images/user.jpg';
import {Component} from "react";

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="flex justify-between items-center bg-[#161D2F] py-[1.125rem] px-4">
                    <Link to="/" className="text-[#FC4747] md:hover:text-white transition-colors">
                        <svg width="33" height="27" fill="currentColor" className="hidden" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"/></svg>
                        <svg width="25" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m20 0 2.5 5h-3.75l-2.5-5h-2.5l2.5 5H12.5L10 0H7.5L10 5H6.25l-2.5-5H2.5A2.489 2.489 0 0 0 .013 2.5L0 17.5A2.5 2.5 0 0 0 2.5 20h20a2.5 2.5 0 0 0 2.5-2.5V0h-5Z"/></svg>
                    </Link>

                    <ul className="flex items-center space-x-6">
                        <li>
                            <NavLink to="/" className="text-white md:hover:text-[#FC4747] transition-colors"
                              style={({ isActive }) =>
                                  isActive
                                      ? { color: '#ffffff', }
                                      : { color: '#5A698F' }
                              } end>
                                <svg width="20" height="20" fill="currentColor" className="hidden" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1 0h7c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1Zm0 11h7c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm-7 11h7c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1Z"/></svg>
                                <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M.8 0h5.6c.48 0 .8.32.8.8v5.6c0 .48-.32.8-.8.8H.8c-.48 0-.8-.32-.8-.8V.8C0 .32.32 0 .8 0Zm0 8.8h5.6c.48 0 .8.32.8.8v5.6c0 .48-.32.8-.8.8H.8c-.48 0-.8-.32-.8-.8V9.6c0-.48.32-.8.8-.8ZM15.2 0H9.6c-.48 0-.8.32-.8.8v5.6c0 .48.32.8.8.8h5.6c.48 0 .8-.32.8-.8V.8c0-.48-.32-.8-.8-.8ZM9.6 8.8h5.6c.48 0 .8.32.8.8v5.6c0 .48-.32.8-.8.8H9.6c-.48 0-.8-.32-.8-.8V9.6c0-.48.32-.8.8-.8Z"/></svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" className="text-[#5A698F] md:hover:text-[#FC4747] transition-colors"
                             style={({ isActive }) =>
                                 isActive
                                     ? { color: '#ffffff', }
                                     : { color: '#5A698F' }
                             } end>
                                <svg width="20" height="20" fill="currentColor" className="hidden" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.045 3.045 0 0 0 20 16.956V3.044A3.045 3.045 0 0 0 16.956 0ZM4 9H2V7h2v2Zm0 2H2v2h2v-2Zm14-2h-2V7h2v2Zm0 2h-2v2h2v-2Zm0-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM4 2H2.74a.74.74 0 0 0-.74.74V4h2V2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm15.26.74a.74.74 0 0 0 .74-.74V16h-2v2h1.26Z"/></svg>
                                <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.564 0H2.436A2.436 2.436 0 0 0 0 2.436v11.128A2.436 2.436 0 0 0 2.436 16h11.128A2.435 2.435 0 0 0 16 13.564V2.436A2.435 2.435 0 0 0 13.564 0ZM3.2 7.2H1.6V5.6h1.6v1.6Zm0 1.6H1.6v1.6h1.6V8.8Zm11.2-1.6h-1.6V5.6h1.6v1.6Zm0 1.6h-1.6v1.6h1.6V8.8Zm0-6.608V3.2h-1.6V1.6h1.008a.592.592 0 0 1 .592.592ZM3.2 1.6H2.192a.592.592 0 0 0-.592.592V3.2h1.6V1.6ZM1.6 13.808V12.8h1.6v1.6H2.192a.592.592 0 0 1-.592-.592Zm11.2.592h1.008a.592.592 0 0 0 .592-.592V12.8h-1.6v1.6Z"/></svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tv-series" className="text-[#5A698F] md:hover:text-[#FC4747] transition-colors"
                              style={({ isActive }) =>
                                  isActive
                                      ? { color: '#ffffff', }
                                      : { color: '#5A698F' }
                              } end>
                                <svg width="20" height="20" fill="currentColor" className="hidden" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.08 4.481H20V20H0V4.481h4.92l-2.7-3.278L3.78.029 7 3.91 10.22 0l1.56 1.203-2.7 3.278ZM2 6.421v11.64h10V6.42H2Zm15 7.76h-2v-1.94h2v1.94Zm-2-3.88h2V8.36h-2v1.94Z"/></svg>
                                <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.264 3.585H16V16H0V3.585h3.936L1.776.962 3.024.023 5.6 3.127 8.176 0l1.248.962-2.16 2.623ZM1.6 14.448h8V5.137h-8v9.311Zm12-3.104H12V9.792h1.6v1.552ZM12 8.241h1.6V6.689H12V8.24Z"/></svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-bookmarks" className="text-[#5A698F] md:hover:text-[#FC4747] transition-colors"
                             style={({ isActive }) =>
                                 isActive
                                     ? { color: '#ffffff', }
                                     : { color: '#5A698F' }
                             } end>
                                <svg width="17" height="20" fill="currentColor" className="hidden" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82V18.52c0 .3-.086.572-.258.82a1.49 1.49 0 0 1-.694.541 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.482c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"/></svg>
                                <svg width="14" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.31 0c.162 0 .317.032.465.095.232.092.417.236.555.434.137.197.206.416.206.655v13.632c0 .24-.069.458-.206.655a1.192 1.192 0 0 1-.555.434 1.19 1.19 0 0 1-.466.084c-.338 0-.63-.112-.877-.338l-4.664-4.484-4.664 4.484a1.26 1.26 0 0 1-.877.349c-.162 0-.318-.032-.466-.095a1.192 1.192 0 0 1-.555-.434A1.122 1.122 0 0 1 0 14.816V1.184C0 .944.069.726.206.53.344.33.53.187.761.095A1.17 1.17 0 0 1 1.227 0h11.082Z"/></svg>
                            </NavLink>
                        </li>
                    </ul>

                    <Link to="/register" className="w-6 h-6 border-2 border-white md:hover:border-[#FC4747] rounded-full overflow-hidden transition-colors">
                        <img src={user} className="w-full rounded-full" alt="logo"/>
                    </Link>
                </nav>
            </header>
        );
    }
}