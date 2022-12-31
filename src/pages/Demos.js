import List from "../components/lists/List";
import Title from "../components/Title";

function Demos() {
    const demos = [
        {
            id: 1,
            title: "React - Github profiler",
            imageUrl:
                "/assets/images/project-screenshots/sprint_allin_deviceconfigurator.png",
            url: "http://ktalathi.com/demos/github/",
        },
        {
            id: 2,
            title: "Flexbox - Chessboard",
            imageUrl:
                "/assets/images/project-screenshots/sprint_bundle_devicewall.png",
            url: "http://ktalathi.com/demos/flexbox/",
        },
        {
            id: 3,
            title: "React - Github finder",
            imageUrl:
                "/assets/images/project-screenshots/sprint_allin_deviceconfigurator.png",
            url: "",
        },
        {
            id: 4,
            title: "React - Feedback App",
            imageUrl:
                "/assets/images/project-screenshots/sprint_allin_deviceconfigurator.png",
            url: "",
        },
    ];

    return (
        <div>
            <Title titleText="Demos" />
            <List items={demos} view="demo" />
        </div>
    );
}

export default Demos;
