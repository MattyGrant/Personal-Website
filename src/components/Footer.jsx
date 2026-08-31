import { Linkedin, GitHub} from "react-feather"
const Footer = () => (
                                                        // bg-primaryBtn
    <section className=" 2xl:px-32 bg-secondaryBg shadow-mediumOpaque shadow-2xl" id="footer">

        <div className="flex-col text-center p-12 mt-20 md:p-8 2xl:p-16">
                                                    {/* text-primaryBg hover:text-accent */}
            <a href="mailto:mrsenormatty@live.com" className="text-xl font-medium text-primaryText hover:text-accent hover:font-semibold">mrsenormatty@live.com</a>
                                {/* text-primaryBg */}
            <div className=" text-primaryText  text-center mt-10 border-b-4 border-b-accent  md:flex md:justify-between">

                <div className="w-3/4 mx-auto md:px-6 md:py-4 md:ml-0 md:text-start md:w-1/2 lg:ml-[5%] 2xl:px-0 2xl:w-1/3">
                                    {/* Text-primaryBg */}
                    <h2 className="text-primaryText font-medium md:font-light m-2 md:text-2xl md:m-2">Matthew Gonzalez</h2>
                    <p className="text-primaryText font-extralight md:mb-2 md:mx-2 md:w-full">A highly motivated Frontend Web Developer building web applications with the goal to grow the success of the overall product</p>
                </div>

                <div className="my-4 md:p-4 md:mr-0 md:w-fit md:my-0 lg:mr-[5%] self-center">
                    <h2 className="md:text-2xl font-medium">Socials</h2>
                    <div className="flex justify-center p-4 md:p-2">
                                                                                                        {/* text-primaryBg */}
                        <a href="https://www.linkedin.com/in/matt-gonzalez-5685568a/" className="mr-2 text-primaryText opacity-80 hover:text-accent"> <Linkedin /> </a>
                                                                                {/* text-primaryBg */}
                        <a href="https://github.com/MattyGrant" className="ml-2 text-primaryText opacity-80 hover:text-accent"> <GitHub /> </a>
                    </div>
                </div>
            </div>
                            {/* text-primaryBg */}
            <p className=" text-primaryText opacity-[30%] text-sm 2xl:text-md mt-4">&copy; 2026 Matthew Gonzalez. Rights Reserved.</p>
            <p className=" text-primaryText opacity-[15%] text-sm"> Powered by React / Tailwind / Vite</p>

        </div>
    </section>
)

export default Footer