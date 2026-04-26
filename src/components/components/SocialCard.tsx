import { ProjectButton } from "@src/constants/projects";
import Button from "@src/components/ui/Button";

interface CardProps {
    img: string;
    title: string;
    description: string;
    buttons: ProjectButton[]
    avatar: string;
}

export default function SocialCard({ img, title, description, buttons, avatar }: CardProps) {
    return (
        <div className="h-84 w-64 mt-2 mb-2 dark:bg-black-Card bg-white-Card text-blackText rounded-xl dark:text-whiteText mr-10 transition-colors duration-750 ease-in-out dark:shadow-DarkOcean shadow-xl  shadow-enderBlack select-none">
            <div className="mx-2 mt-2">
                <img className="rounded-lg w-full h-32 border-2 object-cover dark:border-white-Card border-black-Card" src={img} alt={title + " Banner"} height={256} width={256} />
                <div className="pl-16 relative bottom-16 mb-0">
                    <img src={avatar} alt={title + " avatar"} className="rounded-full dark:border-white-Card border-black-Card border-2 " height={98} width={98} />
                    <h3 className="text-lg font-bold mt-2 text-left text-wrap mx-1">{title}</h3>
                    <span className="text-base text-center mx-4">{description}</span>
                </div>
                <div className=" mx-14 relative bottom-12 flex flex-wrap gap-2">
                    {buttons.map((button) => {
                        const { icon, label, link } = button;
                        const href = link.startsWith("http") ? link : `https://${link}`;
                        return (
                            <Button variant="outline-info" href={href} target="_blank" rel="noopener noreferrer">
                                <i className={icon} ></i>&nbsp; {label}
                            </Button>
                        );
                    })
                    }
                </div>
            </div>
        </div>

    );
};