// interface for project 
export interface ProjectButton {
    icon: string;
    label: string;
    link: string;
}

interface Project {
    title: string;
    description: string;
    img: string;
    buttons: ProjectButton[];
}
    
export const projects: Project[] = [
    {
        title: "Dev New Tab",
        description: "A Design and functional new tab with features interesting for devs.",
        img: "./Demo.png",
        buttons: [
            {
                icon: "bx bxs-window-alt",
                label: "Web",
                link: "https://dev-start-page.vercel.app/"
            },
            {
                icon: "bx bxl-github",
                label: "Code",
                link: "https://github.com/enderdev-v/DevStartPage"
            }
        ]
    },
    {
        title: "enderbot",
        description: "My first Discord Bot is made in typescript and Seyfert :D.",
        img: "./enderbotBanner.webp",
        buttons: [
            {
                icon: "bx bxl-discord-alt",
                label: "Invite",
                link: "https://discord.com/oauth2/authorize?client_id=862905211001503774"
            }
        ]
    },
    {
        title: "Ryosaki Bot",
        description: "Just a simple bot to do interesting things in your server :D",
        img: "./ryosakiBot.webp",
        buttons: [
            {
                icon: "bx bxs-window-alt",
                label: "Web",
                link: "https://ryosaki.netlify.app/"
            },
            {
                icon: "bx bxl-discord-alt",
                label: "Beta",
                link: "https://discord.com/oauth2/authorize?client_id=1122213950667370599"
            }
        ]
    },
];