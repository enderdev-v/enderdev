import SocialCard from "@/components/components/SocialCard";
import { socialCards } from "@/constants/constants";
import PageLayout from "@/components/PageLayout";
import '../css/index.css';

export default function Social() {
    return (
        <PageLayout>
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
        </PageLayout>
    );
};