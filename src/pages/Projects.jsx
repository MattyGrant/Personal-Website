import ProjectCard from "../components/ProjectCard"
import projectData from "../data/projectData"

const Projects = () => {
    const projectsList = projectData.map( project => ( <ProjectCard key={project.id} {...project} /> ))
    // const technologyList = technologyData.map( technology => ( <TechnologyCard key={technology.id} {...technology} /> ))
    return (
        <section className="flex-col mx-auto my-8 mt-10 w-[95%] md:mt-12 md:w-[85%] lg:w-[70%]">
                                    {/* text-primaryText */}
            <h1 className="text-4xl text-secondaryText my-10 font-semibold md:p-10 md:mb-0 text-center " id="projects">Notable Work</h1>

            <div className="flex flex-col w-[90%] mx-auto md:w-full lg:grid lg:grid-cols-2 lg:gap-8 xl:w-[95%]">
                {projectsList}
            </div>

            <h1 className="text-3xl text-secondaryText mt-20 mb-10 font-semibold md:p-10 md:mb-0 text-center " id="projects">Technology Experience</h1>
            <div className="flex flex-col items-start justify-start w-[90%] mx-auto py-10 px-10 gap-4 rounded-xl bg-secondaryBg bg-opacity-60 xl:w-1/2">
                <h3 className="text-2xl text-primaryText font-semibold">Web Development</h3>
                <p className="text-lg text-slate-300">Multiple combined years of both personal and professional experience building applications using modern web development technologies:</p>
                <div className="flex flex-row gap-4 flex-wrap">
                    <p className="bg-lightOpaque px-2 py-2 rounded-xl text-secondaryText shadow-sm">Javascript</p>
                    <p  className="bg-lightOpaque px-2 py-2 rounded-xl text-secondaryText shadow-sm">HTML/CSS</p>
                    <p  className="bg-lightOpaque px-2 py-2 rounded-xl text-secondaryText shadow-sm">React</p>
                    <p  className="bg-lightOpaque px-2 py-2 rounded-xl text-secondaryText shadow-sm">NextJS</p>
                    <p  className="bg-lightOpaque px-2 py-2 rounded-xl text-secondaryText shadow-sm">NodeJS</p>
                    <p  className="bg-lightOpaque px-2 py-2 rounded-xl text-secondaryText shadow-sm">SQL</p>
                    <p  className="bg-lightOpaque px-2 py-2 rounded-xl text-secondaryText shadow-sm">Java</p>
                </div>
            </div>

        </section>
    )
}

export default Projects