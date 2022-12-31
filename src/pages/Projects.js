import List from "../components/lists/List";
import Title from "../components/Title";

function Projects() {
    const projects = [
        {
            id: 14,
            title: "Oracle Intelligent Track and Trace",
            imageUrl:
                "/assets/images/project-screenshots/Oracle Intelligent Track and Trace.png",
            url: "",
        },
        {
            id: 15,
            title: "Oracle Intelligent Track and Trace - Documents",
            imageUrl:
                "/assets/images/project-screenshots/Oracle Intelligent Track and Trace - Documents.png",
            url: "",
        },
        {
            id: 1,
            title: "Sprint - Allin device configurator",
            imageUrl:
                "/assets/images/project-screenshots/sprint_allin_deviceconfigurator.png",
            url: "",
        },
        {
            id: 2,
            title: "Sprint - Bundle device wall",
            imageUrl:
                "/assets/images/project-screenshots/sprint_bundle_devicewall.png",
            url: "",
        },
        {
            id: 3,
            title: "Sprint - Express Upgrade ",
            imageUrl:
                "/assets/images/project-screenshots/sprint_express_upgrade.png",
            url: "",
        },
        {
            id: 4,
            title: "Acumen Solutions - State Department",
            imageUrl: "/assets/images/project-screenshots/ndf1.png",
            url: "",
        },
        {
            id: 5,
            title: "Acumen Solutions - State Department",
            imageUrl: "/assets/images/project-screenshots/ndf2.png",
            url: "",
        },
        {
            id: 6,
            title: "Acumen Solutions - Census Bureau",
            imageUrl:
                "/assets/images/project-screenshots/Census - calendar.png",
            url: "",
        },
        {
            id: 7,
            title: "Acumen Solutions - Census Bureau",
            imageUrl:
                "/assets/images/project-screenshots/Census - calendar modal.png",
            url: "",
        },
        {
            id: 8,
            title: "Acumen Solutions - Business USA",
            imageUrl: "/assets/images/project-screenshots/BUSA - calendar.png",
            url: "",
        },
        {
            id: 9,
            title: "Acumen Solutions - Business USA",
            imageUrl:
                "/assets/images/project-screenshots/BUSA - calendar 1.png",
            url: "",
        },
        {
            id: 10,
            title: "Telecommunications Systems - Enterprise Messaging Access Gateway",
            imageUrl: "/assets/images/project-screenshots/CreateMessage.png",
            url: "",
        },
        {
            id: 11,
            title: "Telecommunications Systems - Huawei reports",
            imageUrl: "/assets/images/project-screenshots/MessageFailures.png",
            url: "",
        },
        {
            id: 12,
            title: "New York Institute of technology - Firewall",
            imageUrl: "/assets/images/project-screenshots/ViewEditDefault.jpg",
            url: "",
        },
        {
            id: 13,
            title: "New York Institute of technology - Distributed Systems",
            imageUrl: "/assets/images/project-screenshots/query.png",
            url: "",
        },
    ];

    return (
        <div>
            <Title titleText="Projects" />
            <List items={projects} view="project" />
        </div>
    );
}

export default Projects;
