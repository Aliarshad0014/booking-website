import React, { useEffect } from "react";
import Logo from "../Components/Images/Logo.png";
import Cart from "../Components/Images/Cart.png";
import Profile from "../Components/Images/user.png";
import menu from "../Components/Images/menu.png";
import menuback from "../Components/Images/menuback.png";

export default function Header() {
    const nav = [
        {
            id: 1,
            Link: "Dresses",
        },
        {
            id: 2,
            Link: "Accessories",
        },
        {
            id: 3,
            Link: "Winter",
        },
        {
            id: 4,
            Link: "Contact Us",
        },
    ];

    const [scrollBg, setScrollBg] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrollBg(true);
        } else {
            setScrollBg(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [navBar, setNavBar] = React.useState(false)

    function onNavClick() {

        setNavBar((oldState) => !oldState);

    }

    return (
        <div className={`flex  justify-between items-center w-full h-20 px-6 fixed z-50 top-0 ${scrollBg ? 'bg-purple-100' : 'bg-white'} transition duration-300`}>

            <nav>
                <div onClick={onNavClick} className="flex mt-6 fixed top-0 z-50 text-gray-500 cursor-pointer">
                    <img src={menu} alt="Menu" width={30} height={30} />
                </div>

                {navBar &&
                    <ul className=" h-[100vh] w-[50vh] fixed top-0 z-50 text-white left-0 bg-gradient-to-b from-purple-800 to-purple-950 opacity-95">
                        
                        <div onClick={onNavClick} className="flex mt-6 fixed top-0 px-6 z-50 text-gray-500 cursor-pointer">
                            <img src={menuback} width={30} height={30} alt="back menu" />
                        </div>
                        
                        <div className=" flex mt-20 ml-6 lex flex-col justify-start items-baseline">
                            {nav.map(({ Link, id }) => (

                                <button
                                    key={id}
                                    className=" hover:scale-105 my-2  hover:text-gray-950 hover:border-purple-500 hover:bg-gray-100 rounded-md p-2  transition-all"
                                >
                                    {Link}
                                </button>
                            ))}
                        </div>

                    </ul>
                }

                <div className="flex">
                    <img className="w-56 ml-5 bg-transparent" src={Logo} alt="" />
                </div>

            </nav>

            {/* if search works okay if doesnt change it */}
            <div className="flex items-center space-x-3">
                <form>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-56 p-2 pl-10 text-sm text-gray-900 rounded-full focus:outline-none bg-gray-100" placeholder="Search" />
                    </div>
                </form>

                <img
                    className="w-6 hover:scale-110 transition-all cursor-pointer"
                    src={Profile}
                    alt="Profile"
                />
                <img
                    className="w-6 hover:scale-110 transition-all cursor-pointer"
                    src={Cart}
                    alt="Cart"
                />
            </div>
        </div>
    )
}

