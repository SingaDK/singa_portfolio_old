import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image";
// @ts-ignore
import image from "../assets/social.png";
// @ts-ignore
import pic from "../assets/ascii.png";

export interface Author {
    firstname: string;
    bio: string;
    profilePic: ImageMetadata;
    os?: string;
    shell?: string;
    lastname: string;
    socials: Socials[];
}

export interface Socials {
    name: string;
    link: string;
}

export interface Site {
    lang: string;
    rssTitle: string;
    siteName: string;
    title: string;
    description: string;
    image: ImageMetadata;
    twitterCreator: string;
    author: Author;
}

export const site: Site = {
    lang: "en",
    rssTitle: "Singa's Portfolio",
    siteName: "Singa's Portfolio",
    title: "Welcome to my portfolio and personal website.",
    description:
        "This is my personal website, where I post news, blogs and some other cool stuff related to embedded and AI.",
    image: image,
    twitterCreator: "",
    author: {
        os: "Linux",
        profilePic: pic,
        shell: "Bash",
        bio: "I am an Embedded software developer, who loves playing with bits and bytes",
        firstname: "Singaravelan",
        lastname: "Neelakandan",
        socials: [
            {
                name: "github",
                link: "https://github.com/SingaDK",
            },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/singaravelan-neelakandan-8b8104121/" },
        ],
    },
};
