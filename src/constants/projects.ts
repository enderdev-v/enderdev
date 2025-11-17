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

const img = "https://camo.githubusercontent.com/69bc9cf59c4e3cdf1b820d36ebf29db25348af198c2cfab99ec8615873b49dea/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f62616e6e6572732f3836323930353231313030313530333737342f38353265663261316433356237353461323433396265656136663133353462612e776562703f73697a653d34303936"
    
export const projects: Project[] = [
    {
        title: "Dev New Tab",
        description: "A Design and functional new tab with features interesting for devs.",
        img: "https://github.com/enderdev-v/DevStartPage/blob/main/public/Demo.png?raw=true",
        buttons: [
            {
                icon: "bx bxl-html5",
                label: "View",
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
        img: img,
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
        description: "A discord bot with interesting features and yep is multifunctional xD.",
        img: "https://ryosaki.vercel.app/_next/image?url=%2FCard%2FConfianza.png&w=256&q=75",
        buttons: [
            {
                icon: "bx bxl-discord-alt",
                label: "View",
                link: "https://ryosaki.vercel.app/"
            },
            {
                icon: "bx bxl-discord-alt",
                label: "Beta",
                link: "https://discord.com/oauth2/authorize?client_id=1122213950667370599"
            }
        ]
    },
];