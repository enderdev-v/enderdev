export const WindowLocalStorageNames = {
    Theme: "theme"
}

// interface for project 
export interface SocialButton {
    icon: string;
    label: string;
    link: string;
}

interface SocialCard {
    title: string;
    img: string;
    description: string;
    buttons: SocialButton[];
    avatar: string;
}
export const socialCards: SocialCard[] = [
    {
        title: "enderdev_v",
        img: "https://pbs.twimg.com/profile_banners/1672091526757859331/1764470676/1500x500",
        description: "  Twitter",
        buttons: [
            {
                icon: "bx bxl-twitter",
                label: "Follow",
                link: "https://twitter.com/enderdev_v"
            }
        ],
        avatar: "https://pbs.twimg.com/profile_images/2036853361883103232/KCl_LPgO_400x400.jpg"

    },
    {
        title: "enderdev_v",
        img: "https://pbs.twimg.com/profile_banners/1672091526757859331/1764470676/1500x500",
        description: "Instagram",
        buttons: [
            {
                icon: "bx bxl-instagram",
                label: "Follow",
                link: "https://www.instagram.com/enderdev_v/"
            }
        ],
        avatar: "/enderdevIg.jpg"

    },
    {
        title: "enderdev",
        img: "https://cdn.bsky.app/img/banner/plain/did:plc:qxv7ouhu6dghoojh4tj4lntf/bafkreiegu7hlieyvglhd6szuoj57rpgc67lskje36stcm5keevztn7wddq@jpeg",
        description: "Bluesky",
        buttons: [
            {
                icon: "bx bxl-twitter",
                label: "Follow",
                link: "https://bsky.app/profile/enderdev.bsky.social"
            }
        ],
        avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:qxv7ouhu6dghoojh4tj4lntf/bafkreidw5yojcjfhjdro6mecf5fb3vkfp23t4jpud4esv2qnld4wmzfzhm@jpeg"

    },
    {
        title: "enderdev",
        img: "https://camo.githubusercontent.com/8eb450ee960e9d8ef6d7cd4052199aace3566d1717b51397bd549c22e8da6500/68747470733a2f2f77616c6c70617065726163636573732e636f6d2f66756c6c2f383830383036382e706e67",
        description: "Studios",
        buttons: [
            {
                icon: "bx bxl-github",
                label: "Follow",
                link: "https://github.com/enderdev-Studios"
            }
        ],
        avatar: "https://avatars.githubusercontent.com/u/227098273?s=200&v=4"

    },
]   