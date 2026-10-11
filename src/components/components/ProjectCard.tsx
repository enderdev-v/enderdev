import { ProjectButton } from "@src/constants/projects";
import Button from "@src/components/ui/Button";

interface CardProps {
    img: string;
    title: string;
    description: string;
    buttons: ProjectButton[]
}

export default function Card({ img, title, description, buttons }: CardProps) {

    return (
        <div className="dark:bg-black-Card bg-white-Card text-blackText rounded-xl dark:text-whiteText  block max-w-sm p-6 border border-default rounded-base shadow-xs">
            <a href="#">
                <img className="rounded-4xl border-gray-700 border" src={img} alt="" />
            </a>
            <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-bold tracking-tight  font-Monocraft">{title}</h5>
            </a>
            <p className="mb-6 dark:text-gray-300 text-shadow-enderBlack font-sans">{description}</p>
            <div className="inline-flex items-center focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
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
    )
};