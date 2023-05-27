import { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { Link } from 'react-scroll';
const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // Scroll effect PC
    useEffect(() => {
        const changeBackground = () => window.pageYOffset > 80 ? setNavbar(true) : setNavbar(false)
        window.addEventListener('scroll', changeBackground)
    },[])
                                                                    // bg-primaryBtn
    const headerScroll = navbar ? 'sm:duration-150 md:duration-300 bg-header' : ''
    
    // Toggle Menu Change
    const toggleMenu = () => {
        setIsMenuClicked(!isMenuClicked)
    }
    
    return (
        <nav className={`${headerScroll}  text-secondaryBtn shadow-mediumOpaque shadow-md text-end top-0 left-0 sticky py-1 px-4 z-20 md:p-4 md:flex md:justify-between lg:p-8 lg:text-lg xl:p-10 xl:mx-auto 2xl:text-xl 2xl:px-32`}>
            
            <div className="flex justify-between m-2">
                <h1 className=" font-medium md:font-semibold"> &lt;mattgonzalez&#47;&gt;</h1>
                <Menu className={`${isMenuClicked ? 'hidden' : ''} hover:cursor-pointer md:hidden`} onClick={toggleMenu}/>
                <X className={`${isMenuClicked ? '' : 'hidden'} hover:cursor-pointer md:hidden`} onClick={toggleMenu}/>
            </div>
            
            <ul className={`${isMenuClicked ? '' : 'hidden'} inline-flex flex-col items-end p-2 my-2 w-1/3 text-sm tracking-tight md:font-light md:flex md:flex-row 
            md:items-center md:w-fit lg:font-normal lg:text-md xl:text-lg xl:font-normal`}>

                <li className="relative w-min hover:text-accent mx-2">
                    <Link to="intro" spy={true} smooth="true" offset={-300} duration={800} className="hover:cursor-pointer hover:after:w-full after:absolute 
                    after:content-[''] after:bg-secondaryBtn after:h-[1px] after:w-0 after:left-0 after:-bottom-0 after:rounded-lg after:duration-300" >
                        HOME
                    </Link>
                </li>
                <li className="relative w-max hover:text-accent mx-2">
                    <Link to="about-me" spy={true} smooth="true" offset={-180} duration={800} className="hover:cursor-pointer hover:after:w-full after:absolute 
                    after:content-[''] after:bg-secondaryBtn after:h-[1px] after:w-0 after:left-0 after:bottom-0 after:rounded-lg after:duration-300" >
                        ABOUT ME
                    </Link>
                </li>
                <li className="relative w-min hover:text-accent mx-2">
                    <Link to="projects" spy={true} smooth="true" offset={-210} duration={800} className="hover:cursor-pointer hover:after:w-full after:absolute 
                    after:content-[''] after:bg-secondaryBtn after:h-[1px] after:w-0 after:left-0 after:bottom-0 after:rounded-lg after:duration-300">
                        PROJECTS
                    </Link>
                </li>
                <li className="relative w-min hover:text-accent mx-2">
                    <Link to="footer" spy={true} smooth="true" duration={800} className="hover:cursor-pointer hover:after:w-full after:absolute after:content-[''] after:bg-secondaryBtn after:h-[1px] after:w-0 after:left-0 after:bottom-0 after:rounded-lg after:duration-300">
                        CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header