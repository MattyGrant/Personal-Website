const AboutMe = () => {
    return ( 
                                // p-4 mt-12 sm:px-6 sm:w-full md:w-full md:mt-0 md:mx-auto lg:p-12 xl:w-4/5 2xl:w-2/3
        <section className=" bg-darkOpaque mx-auto px-6 py-10 md:px-10 md:py-20 lg:py-36" id="about-me">

            <div className="max-w-[1200px] mx-auto md:p-10 md:w-full md:grid md:grid-cols-aboutmeCol md:grid-row-aboutmeRow md:gap-x-4 lg:gap-x-2">
                <h2 className="font-semibold text-secondaryBtn text-4xl m-2 md:self-center md:text-[2.5rem] md:col-start-1 md:col-end-1 md:row-start-1 lg:text-5xl" id="">
                    Who am I?
                </h2>

                    {/* text-primaryBg bg-primaryBtn font-bold my-2 px-3 py-2 md:relative md:pr-[20rem] md:top-[9.5rem] md:text-xl lg:top-[12.5rem] lg:text-2xl 
                lg:pr-[22.75rem] xl:pr-[25rem] xl:p-4 xl:font-extrabold */}
                <p className="bg-accent px-4 py-4 self-center mb-1 text-primaryBg text-3xl font-bold md:m-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-2 md:relative md:-left-4 md:w-introCalcAbout xl:w-introCalcAboutLg">Frontend Developer and husky dad from Las Vegas</p>

                                {/* font-light tracking-wide md:relative md:w-[50%] md:top-[10em] lg:tracking-widest lg:top-[12rem] lg:pr-6 lg:w-[60%] xl:w-[60%] xl:text-lg */}
                <div className="font-light md:m-2 md:col-start-1 md:col-end-2 md:row-start-3 md:tracking-wide md:row-end-3 lg:tracking-widest xl:text-lg">
                                {/* my-2 md:relative lg:mt-4 */}
                    <p className="m-2 md:mb-2 lg:mb-4">
                        My <span className="font-bold">Experience</span> is in <span className=" border-b-[1px] border-primaryBtn font-bold">React</span>, <span className="border-b-[1px] border-primaryBtn font-bold">Tailwind</span> and <span className="border-b-[1px] border-primaryBtn font-bold">Bootstrap</span> with a solid fundamental understanding of web development using <span className="border-b-[1px] border-primaryBtn font-bold">HTML</span>, <span className="border-b-[1px] border-primaryBtn font-bold">CSS</span> and <span className="border-b-[1px] border-primaryBtn font-bold">JavaScript</span>. I&apos;m open to <span className="font-bold">Job</span> opportunities where I learn, grow and contribute.
                    </p>
                            {/* my-2 md:relative lg:mt-4 */}
                    <p className="m-2 md:mb-2 lg:mb-4">
                        I previously worked in healthcare, graduating with a bachelors degree in Exercise Science and the plan of becoming a surgeon. Since my career change I have found a passion for building intuitive and beautiful web apps for the world to see.
                    </p>
                </div>

                {/* shadow-lg my-1 mx-auto w-full max-w-[350px] md:m-0 md:relative md:left-[23.5rem] md:w-[45%] md:bottom-[20rem] lg:left-[35rem] lg:bottom-[15rem] xl:bottom-[18rem] 2xl:bottom-[16rem] 2xl:left-[47rem] */}
                <img src="/Nature.jpg" alt="" className=" md:relative  md:z-10 shadow-xl md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-4 md:min-w-[225px]"/>

            </div>
                                    {/* text-primaryText */}
                    {/* font-bold text-secondaryBtn text-3xl p-2 md:relative md:text-5xl md:top-[10rem] lg:top-[13rem] xl:top-[13rem] */}
        </section>
    )
}
    
export default AboutMe