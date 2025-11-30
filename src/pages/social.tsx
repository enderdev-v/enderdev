import SocialCard from "@/components/SocialCard";
import Navbar from "../components/Sections/navbar";
import '../index.css'
import { socialCards } from "@/constants/constants";

export default function Social() {

    return (

        <>
            <Navbar></Navbar>
            <div className="m-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                {socialCards.map((social, index) => (
                    <SocialCard
                        key={index}
                        title={social.title}
                        description={social.description}
                        img={social.img}
                        buttons={social.buttons}
                        avatar={social.avatar}
                    />
                ))}
            </div>
        </>
    );
};