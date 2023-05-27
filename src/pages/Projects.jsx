import ProjectCard from "../components/ProjectCard"
import projectData from "../data/projectData"

const Projects = () => {
    const projectsList = projectData.map( project => ( <ProjectCard key={project.id} {...project} /> ))
    return (
        <section className="flex-col mx-auto my-8 mt-10 md:mt-12 md:w-[85%] lg:w-[75%] xl:w-2/3">
                                    {/* text-primaryText */}
            <h1 className="text-5xl text-secondaryBtn mb-10 font-semibold md:p-10 md:mb-0 text-center" id="projects">My Projects</h1>

                <div className="flex-col justify-between mx-auto">
                    {projectsList}
                </div>

        </section>
    )
}

export default Projects