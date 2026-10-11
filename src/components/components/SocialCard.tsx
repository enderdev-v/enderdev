import { ProjectButton } from "@src/constants/projects";
import React from "react";
import Button from "../ui/Button";

interface CardProps {
    img: string;
    title: string;
    description: string;
    buttons: ProjectButton[];
    avatar: string;
    bio: string;
}

export default function SocialCard({ img, title, description, buttons, avatar, bio }: CardProps) {
    return (
        <div className="flex min-w-0 w-full max-w-[400px] flex-col items-center overflow-hidden rounded-[25px] border border-white/25 bg-white/10 text-blackText shadow-[0_5px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm dark:text-whiteText">
            <img
                src={img}
                alt={`${title} banner`}
                className="h-28 w-full object-cover"
            />

            <div className="-mt-20 flex w-full min-w-0 flex-col items-center px-5 pb-5 sm:px-[30px] sm:pb-[30px]">
                <div className="relative h-[150px] w-[150px]">
                    <img
                        src={avatar || img}
                        alt={`${title} avatar`}
                        className="h-full w-full rounded-full border-4 border-black-Card object-cover shadow-[0_5px_20px_rgba(0,0,0,0.4)] dark:border-white-Card"
                        height={150}
                        width={150}
                    />
                </div>

                <div className="mt-[15px] flex min-w-0 max-w-full flex-col items-center text-center">
                    <h2 className="max-w-full break-words text-2xl font-semibold leading-tight sm:text-[33px] font-sans">{title}</h2>
                    <span className="max-w-full break-words text-lg dark:text-gray-300 text-gray-700">{description}</span>
                </div>

                <div className="mt-[10px] text-center">
                    <h3 className="font-Monocraft text-lg text-center">
                        bio
                    </h3>
                    <p className="text-base font-mono">
                        {bio.split("\n").map((s, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {s}
                                    {index == (bio.split('\n').length - 1) ? <></> : <br />}
                                </React.Fragment>
                            )
                        })}
                    </p>
                </div>

                <div className="mt-[30px] flex flex-wrap items-center justify-center gap-4">
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
}
