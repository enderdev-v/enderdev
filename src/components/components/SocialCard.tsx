import { ProjectButton } from "@/constants/projects";
import Button from "@components/UI/Button";

interface CardProps {
    img: string;
    title: string;
    description: string;
    buttons: ProjectButton[]
    avatar: string;
}

export default function SocialCard({ img, title, description, buttons, avatar }: CardProps) {
    return (
        <div className="h-80 w-64 mt-10 mb-10 dark:bg-[#26262B] bg-[#E1E2ED] text-blackText rounded-xl dark:text-whiteText mr-10 transition-colors duration-750 ease-in-out">
            <div className="mx-2 mt-2">
                <img className="rounded-lg w-full h-24" src={img} alt={title + " Banner"} height={256} width={256} />
                <div className="card-content">
                    <div className="pl-16 relative bottom-8">
                    <img src={avatar} alt={title + " avatar"} className="rounded-full border-blue-700 border-2 " height={98} width={98}/>
                    <h3 className="text-lg font-bold mt-2">{title}</h3>
                    <p className="text-base">&nbsp;&nbsp;{description}</p>
                    </div>
                    <div className="mt-2 mx-14">
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