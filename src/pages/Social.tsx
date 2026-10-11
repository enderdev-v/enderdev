import SocialCard from "@components/components/SocialCard";
import { socialCards } from "@src/constants/constants";
import PageLayout from "@components/PageLayout";
import '../css/index.css';

export default function Social({ user }: { user: any }) {
    return (
        <PageLayout user={user}>
       
                <div className="mx-4 my-10 grid min-w-0 grid-cols-1 justify-items-center gap-8 sm:m-10 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]" >
                    {socialCards.map((social, index) => (
                        <SocialCard
                            key={index}
                            title={social.title}
                            description={social.description}
                            img={social.img}
                            buttons={social.buttons}
                            avatar={social.avatar}
                            bio={social.bio}
                        />
                    ))}
                </div>
            
        </PageLayout>
    );
};