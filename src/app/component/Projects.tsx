import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import {ProjectCardProps} from "./ProjectCard";

const Projects: ProjectCardProps[] = [
    {
        title: "Galacticraft",
        description: "Leading a team of volunteer open source developers to update one of Minecraft's most popular mods to modern versions of the game.",
        thumbnail: "/assets/galacticraft.png",
        links: [{
            title: "GitHub",
            url: "https://github.com/TeamGalacticraft/Galacticraft",
            icon: <GitHubIcon/>
        }],
        tags: [
            "Java",
            "Gradle",
            "CD/CI",
            "Open Source"
        ]
    },
    {
        title: "Cerberus",
        description: "A multi-purpose Discord bot utilizing Docker and Kubernetes to self-repair and scale.",
        thumbnail: "/assets/cerberus.png",
        links: [{
            title: "GitHub",
            url: "https://github.com/PyrrhaDevs/Cerberus",
            icon: <GitHubIcon/>
        }],
        tags: [
            "Kotlin",
            "Gradle",
            "CD/CI",
            "Docker"
        ]
    },
    {
        title: "Personal Website",
        description: "A personal website displaying past and current projects along with previous work experience and skills.",
        thumbnail: "assets/pyrrhadev.png",
        links: [{
            title: "GitHub",
            url: "https://github.com/PyrrhaDevs/pyrrha.dev",
            icon: <GitHubIcon/>
        }],
        tags: [
            "React",
            "TypeScript",
            "CD/CI",
            "MUI"
        ]
    },
    {
        title: "GovHack 2019: Localé",
        description: "Localé is a tourism based application designed to better connect visitors to local businesses and events in a safe and stress free manner. Localé will also include local area safety and evacuation information to improve community safety. Data generated can be feed back to the council to aid in council and civil defense planning. The end goal of our idea is to have a well designed app with a great user experience, while accomplishing our core concepts well.",
        thumbnail: "assets/locale.png",
        links: [
            {
                title: "GitHub",
                url: "https://github.com/TeamIO-NZ/GovHack2019",
                icon: <GitHubIcon/>
            },
            {
                title: "Website",
                url: "https://2019.hackerspace.govhack.org/projects/local",
                icon: <LanguageIcon/>
            }
        ],
        tags: [
            "Deadname",
            "Django",
            "Python 3"
        ]
    },
    {
        title: "GovHack 2020: LivCity",
        description: "LivCity is an application that allows a city to gain community sources information on selected areas. This app functions by an administrator or researcher selecting an area to question, this could be for example regarding air pollution, traffic, safety, waste and more. Using feedback from the community, the appropriate authorities can develop needed infrastructure in areas or appropriate social services, greatly improving the efficiency, usefulness, and bringing innovation to the community.",
        thumbnail: "assets/livcity.png",
        links: [
            {
                title: "GitHub",
                url: "https://github.com/TeamIO-NZ/liv_city_flutter",
                icon: <GitHubIcon/>
            },
            {
                title: "Website",
                url: "https://2020.hackerspace.govhack.org/projects/livcity",
                icon: <LanguageIcon/>
            }
        ],
        tags: [
            "Deadname",
            "Flutter",
            "Dart"
        ]
    }
]

export default Projects