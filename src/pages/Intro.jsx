const Intro = () => {
    return (
                                // max-w-5xl mx-auto p-4 z-20 mt-8 md:text-3xl md:px-10 lg:px-32 xl:px-34
        <section className="flex flex-col-reverse items-center justify-center gap-x-20 gap-y-2 py-40 md:flex-row" id="intro">
            <div className="flex flex-col items-center justify-center gap-4 md:items-stretch">
                <h1 className="items-center text-4xl font-medium text-slate-200" id="home">
                    Hey! I&apos;m Matthew
                </h1>
                <p className=" text-2xl text-slate-200 font-bold">
                    I&apos;m a <span className=" text-primaryBtn text-3xl font-bold">Front-end Developer</span>
                </p>
            </div>
            <img src="/self-portrait_fix3.png" alt="self-portrait" className="w-60 h-60 rounded-full"/>
        </section>

    )
}
export default Intro