import { GitHub } from "react-feather";

const ProjectCard = (props) => {
    const {skills} = props;
    const skillsList = skills.map((skill) => (                                                                                                     // text-primaryBtn bg-primaryBg
        <div className="px-3 py-1.5 mx-0 my-auto rounded-xl text-primaryText bg-mediumOpaque text-md xl:text-lg font-light whitespace-nowrap
        shadow-darkOpaque shadow-lg" 
        key={skill.index}>
            {skill}
        </div> 
        )
    )
  return (
    <div className="p-4 flex flex-col items-start bg-secondaryBg bg-opacity-50 rounded-md my-12 md:w-full md:justify-center md:text-left lg:my-0 lg:px-2 lg:py-0">
        <h2 className="font-bold text-primaryBtn text-xl order-1 px-4 md:text-xl lg:py-4 2xl:text-2xl">{props.title}</h2>
        <div className="flex flex-col order-3 md:order-2 md:my-auto md:p-2 lg:p-2 2xl:p-4">
            <p className="text-primary font-light my-2 px-5 order-2 text-lg tracking-wide">{props.description}</p>
            <div className=" flex flex-row-reverse w-full justify-between order-4 px-4 md:text-left my-3 2xl:my-4">
                <div className="flex order-4">
                    {props.repo && <a href={props.repo} className=" rounded-xl ml-4 p-2 md:ml-4 text-primaryText bg-accent hover:bg-secondaryBtn hover:text-accent  hover:shadow-md hover:cursor-pointer ">
                        <GitHub className=""/> 
                    </a>}
                    
                    <a href={props.url} className="p-2 self-start bg-secondaryBtn text-accent font-bold rounded-md hover:shadow-lg hover:cursor-pointer hover:bg-accent hover:text-secondaryBtn 
                    md:px-2 md:py-2">Live Demo</a>
                </div>

                <div className="flex flex-wrap gap-3 order-4 w-1/2 md:w-2/3">
                    {skillsList}
                </div>
            </div>

        </div>
        <img src={props.img} alt="" className="rounded-3xl object-fill w-[95%] mx-auto my-4 order-2 md:order-1 md:w-full md:px-4 md:my-6 md:mr-2 lg:w-full" />
    </div>
    
  )
}

export default ProjectCard