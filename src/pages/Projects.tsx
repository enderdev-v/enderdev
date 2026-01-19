import { projects } from "#src/constants/projects";
import Card from "#components/components/ProjectCard";
import PageLayout from "#src/components/PageLayout";
import '../css/index.css'

export default function Projects() {

    return (
        <PageLayout>
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
        </PageLayout>
    );
};