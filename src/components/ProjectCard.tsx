import Button from "@components/ui/Button";

interface CardProps {
    img: string;
    title: string;
    description: string;
    link: string;
    href: string;
}

export default function Card({ img, title, description, link, href }: CardProps) {
    return (
        <div className="h-80 w-64 mt-10 mb-10 dark:bg-gray-800 bg-gray-400 text-black-100 rounded-xl dark:text-white-0 mr-10">
            <div className="m-2">
                <img className="rounded-lg w-full" src={img} alt={title} height={64} width={64} />
                <div className="card-content">
                    <h3 className="text-lg font-bold mt-2">{title}</h3>
                    <p className="text-base">{description}</p>
                    <div className="mt-8">
                        <Button variant="outline-info" href={href} target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-html5' ></i> &nbsp; Project
                        </Button>
                        <Button variant="outline-info" href={link} target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-github'></i> &nbsp; Repo
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
