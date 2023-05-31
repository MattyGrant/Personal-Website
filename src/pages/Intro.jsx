const Intro = () => {
    return (
                                // max-w-5xl mx-auto p-4 z-20 mt-8 md:text-3xl md:px-10 lg:px-32 xl:px-34
        <section className="relative text-left my-16 sm:p-6 md:p-10 md:my-16 md:grid md:grid-cols-minMaxContent md:grid-row-twoFrOne md:max-w-fit md:mx-auto md:gap-2 
        lg:my-36" id="intro">
                                                {/*extra scheme: text-primaryText */}
                        {/* font-bold ml-2 my-1 text-secondaryBtn text-3xl md:text-5xl md:relative md:left-[26rem] md:top-32 md:w-1/3 lg:text-6xl lg:w-1/2 */}
            <h1 className="self-center text-left font-bold text-4xl px-4 sm:text-5xl md:px-2 md:py-10 lg:mt-10 xl:mt-18 xl:text-6xl xl:mx-2" id="home">
                                                            {/* text-secondaryText */}
                                                            {/* font-semibold opacity-40 text-secondaryBtn md:text-[2.75rem] lg:text-5xl */}
                <span className="block text-3xl text-secondaryText font-semibold sm:text-4xl md:font-bold xl:text-5xl"> Hey! I&apos;m </span> 
                Matthew
            </h1>
                            {/* bg-primaryBtn text-primaryBg text-2xl font-medium px-2 py-1 md:relative md:top-48 md:text-right md:text-xl md:p-4 md:mr-10 md:font-semibold lg:mr-20 lg:p-2 lg:text-2xl xl:mr-8 xl:font-bold */}
            <p className="bg-primaryBtn text-primaryBg  md:inline-block px-4 py-4 text-xl font-extrabold md:relative md:self-start md:col-start-3 md:col-end-1 md:row-start-2 md:text-right md:-left-0 md:w-introCalc xl:text-[1.75rem]">
                Front-End Developer
            </p>

                                                                            {/* mt-4 w-full md:max-w-sm md:relative md:left-5 md:bottom-28 lg:left-5 shadow-lg */}
            <img src="/self-portrait_fix2.jpg" alt="" className=" shadow-lg md:relative md:z-10 md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3 sm:min-w-[375px] xl:min-w-[425px]"/>

        </section>

    )
}
export default Intro