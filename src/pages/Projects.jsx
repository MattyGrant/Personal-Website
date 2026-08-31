import ProjectCard from "../components/ProjectCard"
import projectData from "../data/projectData"

const Projects = () => {
    const projectsList = projectData.map( project => ( <ProjectCard key={project.id} {...project} /> ))
    // const technologyList = technologyData.map( technology => ( <TechnologyCard key={technology.id} {...technology} /> ))
    return (
        <section className="flex-col mx-auto my-8 mt-10 md:mt-12 md:w-[85%] lg:w-[75%] xl:w-2/3">
                                    {/* text-primaryText */}
            <h1 className="text-4xl text-secondaryText mb-10 font-semibold md:p-10 md:mb-0 text-center " id="projects">Notable Work</h1>

            <div className="flex-col justify-between mx-auto">
                {projectsList}
            </div>

            <h1 className="text-3xl text-secondaryText mb-10 font-semibold md:p-10 md:mb-0 text-center " id="projects">Technology Experience</h1>
            <div className="flex flex-col items-start justify-center py-20 px-10 gap-4 rounded-xl bg-mediumOpaque">
                <h3 className="text-2xl text-primaryText">Front-end Web Development</h3>
                <p className="text-lg text-slate-300">Multiple combined years of both personal and professional experience building applications using modern web development technologies:</p>
                <div className="flex flex-row gap-4">
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