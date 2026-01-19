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
        description: "  Twitter ^^",
        buttons: [
            {
                icon: "bx bxl-twitter",
                label: "Follow",
                link: "https://twitter.com/enderdev_v"
            }
        ],
        avatar: "https://pbs.twimg.com/profile_images/1994961088450879488/bMOCeSNE_400x400.jpg"

    },
    {
        title: "enderdev_v",
        img: "https://pbs.twimg.com/profile_banners/1672091526757859331/1764470676/1500x500",
        description: "Instagram ^^",
        buttons: [
            {
                icon: "bx bxl-instagram",
                label: "Follow",
                link: "https://www.instagram.com/enderdev_v/"
            }
        ],
        avatar: "/enderdev ig.jpg"

    },
    {
        title: "enderdev",
        img: "https://cdn.bsky.app/img/banner/plain/did:plc:qxv7ouhu6dghoojh4tj4lntf/bafkreiegu7hlieyvglhd6szuoj57rpgc67lskje36stcm5keevztn7wddq@jpeg",
        description: "Bluesky ^^",
        buttons: [
            {
                icon: "bx bxl-twitter",
                label: "Follow",
                link: "https://bsky.app/profile/enderdev.bsky.social"
            }
        ],
        avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:qxv7ouhu6dghoojh4tj4lntf/bafkreidw5yojcjfhjdro6mecf5fb3vkfp23t4jpud4esv2qnld4wmzfzhm@jpeg"

    },
]   