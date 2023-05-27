import { GitHub } from "react-feather";

const ProjectCard = (props) => {
    const {skills} = props;
    const skillsList = skills.map((skill) => (  
                                                                                                            // text-primaryBtn bg-primaryBg
            <div className="inline-flex px-3 py-2 items-center justify-center flex-shrink-0 mr-2 rounded-xl text-primaryText bg-mediumOpaque text-md xl:text-lg font-light 
            shadow-darkOpaque shadow-lg" 
            key={skill.index}>
                {skill}
            </div> 
        )
    )
  return (
    <div className=" mx-auto p-4 md:flex md:w-full md:justify-around md:my-4 md:text-left lg:p-8">

        <div className="flex-col text-center md:text-left md:w-1/2 md:my-auto md:p-2 lg:p-2 2xl:p-4">
                                    {/* text-primaryBtn */}
            <h2 className="font-bold text-primaryBtn text-xl md:text-xl 2xl:text-2xl">{props.title}</h2>
            <p className=" text-primary font-light my-2 sm:text-lg tracking-wide lg:w-4/5 lg:text-xl 2xl:w-2/3 2xl:text-2xl 2xl:my-4">{props.description}</p>
            <div className="flex justify-center md:w-fit">
                {skillsList}
            </div>
            <div className=" flex justify-center md:w-fit md:text-left my-3 2xl:my-4">
                <a href={props.url} className=" p-2 bg-secondaryBtn text-accent font-bold rounded-lg hover:shadow-lg hover:cursor-pointer hover:bg-accent hover:text-secondaryBtn 
                md:px-3 md:py-2">Live Demo</a>
                <a href={props.repo} className=" rounded-xl ml-4 p-2 md:ml-4 text-primaryText bg-accent hover:bg-secondaryBtn hover:text-accent  hover:shadow-md hover:cursor-pointer ">
                    <GitHub className=""/> 
                </a>
            </div>

        </div>
        <img src={props.img} alt="" className="rounded-3xl object-fill w-3/4 mx-auto my-4 md:order-first md:w-1/2 md:p-2 md:my-2 md:mr-2 lg:w-[50%] 2xl:w-[45%]" />
    </div>
  )
}

export default ProjectCard