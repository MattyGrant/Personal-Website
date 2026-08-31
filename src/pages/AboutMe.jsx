const AboutMe = () => {
    return ( 
                                // p-4 mt-12 sm:px-6 sm:w-full md:w-full md:mt-0 md:mx-auto lg:p-12 xl:w-4/5 2xl:w-2/3
        <section className="bg-secondaryBg  bg-mediumOpaque flex flex-col justify-center items-center px-6 py-10 md: md:px-10 md:py-20 lg:py-36" id="about-me">
            <h2 className="font-semibold text-secondaryText text-4xl m-2">
                Who am I?
            </h2>
            <div className="max-w-[1200px] flex flex-col gap-4 md:flex-row">

                                {/* font-light tracking-wide md:relative md:w-[50%] md:top-[10em] lg:tracking-widest lg:top-[12rem] lg:pr-6 lg:w-[60%] xl:w-[60%] xl:text-lg */}
                <div className="font-light flex-col items-start justify-center gap-4">
                    <h3 className="text-primaryBtn py-2 mt-8 text-3xl font-bold">Software Developer / Gamer / Terrible Golfer</h3>
                    <p className="my-4">
                        Front-end developer focused on building clean, <span className="border-b-[1px] border-primaryBtn font-bold text-slate-200">responsive</span>, and <span className="border-b-[1px] border-primaryBtn font-bold text-slate-200">accessible</span> web apps with <span className="border-b-[1px] border-primaryBtn font-bold text-slate-200">HTML</span>, <span className="border-b-[1px] border-primaryBtn font-bold text-slate-200">CSS</span>, and <span className="border-b-[1px] border-primaryBtn font-bold text-slate-200">JavaScript</span>.
                    </p>
                    <p className="my-2">
                        Before making the leap into tech, I studied Exercise Science with the plan of becoming a cardiac surgeon. Turns out, my passion for impactful and <span className="border-b-[1px] border-primaryBtn font-bold text-slate-200">efficient problem-solving</span> was better suited behind a keyboard and screen than a scalpel and patient.
                    </p>
                </div>
                <img src="/Nature.jpg" alt="" className="w-80 self-center min-w-[225px] shadow-xl md:max-w-[350px]"/>
            </div>
                                    {/* text-primaryText */}
                    {/* font-bold text-secondaryBtn text-3xl p-2 md:relative md:text-5xl md:top-[10rem] lg:top-[13rem] xl:top-[13rem] */}
        </section>
    )
}
    
export default AboutMe