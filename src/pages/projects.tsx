import { projects } from "@/constants/projects";
import Navbar from "../components/Sections/navbar";
import '../index.css'
import Card from "@components/ProjectCard.tsx";

export default function Projects() {

    return (

        <>
            <Navbar></Navbar>
            <div className="m-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                {
                    projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            img={project.img}
                            buttons={project.buttons}
                        />
                    ))
                }
            </div>
        </>
    );
};
