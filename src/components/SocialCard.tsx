import { ProjectButton } from "@/constants/projects";
import Button from "@/components/ui/Button";

interface CardProps {
    img: string;
    title: string;
    description: string;
    buttons: ProjectButton[]
}

export default function Card({ img, title, description, buttons }: CardProps) {
    return (
        <div className="h-80 w-64 mt-10 mb-10 dark:bg-gray-800 bg-gray-400 text-black-100 rounded-xl dark:text-white-0 mr-10">
            <div className="m-2">
                <img className="rounded-lg w-full" src={img} alt={title} height={64} width={64} />
                <div className="card-content">
                    <h3 className="text-lg font-bold mt-2">{title}</h3>
                    <p className="text-base">{description}</p>
                    <div className="mt-8">
                        {buttons.map((button) => {
                            const { icon, label, link } = button;
                            const href = link.startsWith("http") ? link : `https://${link}`;
                            return (
                                <Button variant="outline-info" href={href} target="_blank" rel="noopener noreferrer">
                                    <i className={icon} ></i> &nbsp; {label}
                                </Button>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};
