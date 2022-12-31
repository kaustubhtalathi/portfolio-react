import List from "../components/lists/List";
import Title from "../components/Title";

function Demos() {
    const demos = [
        {
            id: 1,
            title: "React - Github profiler",
            imageUrl: "",
            url: "http://ktalathi.com/demos/github/",
        },
        {
            id: 2,
            title: "Flexbox - Chessboard",
            imageUrl: "",
            url: "http://ktalathi.com/demos/flexbox/",
        },
        {
            id: 3,
            title: "React - Github finder",
            imageUrl: "",
            url: "",
        },
        {
            id: 4,
            title: "React - Feedback App",
            imageUrl: "",
            url: "",
        },
        {
            id: 3,
            title: "React - YOLO Stock sentiments",
            imageUrl: "",
            url: "https://master.d10feblik8amou.amplifyapp.com/",
        },
        {
            id: 4,
            title: "VueJS - ToDo App",
            imageUrl: "",
            url: "https://main.d9f81ain3jz5c.amplifyapp.com/",
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
