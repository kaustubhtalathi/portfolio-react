import Title from "../components/Title";

function Resume() {
    return (
        <>
            <Title titleText={"Resume"} />
            <div className="h-screen">
                <object
                    data="/assets/pdf/Kaustubh Talathi - 2022 Resume.pdf"
                    type="application/pdf"
                    width="100%"
                    className="h-full"
                >
                    <p>
                        Alternative text - include a link{" "}
                        <a href="http://africau.edu/images/default/sample.pdf">
                            to the PDF!
                        </a>
                    </p>
                </object>
            </div>
        </>
    );
}

export default Resume;
