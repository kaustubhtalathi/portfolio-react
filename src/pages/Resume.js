import Title from "../components/Title";

function Resume() {
    return (
        <>
            <Title titleText={"Resume"} />
            <div className="h-screen">
                <object
                    data="/assets/pdf/resume.pdf"
                    type="application/pdf"
                    width="100%"
                    className="h-full"
                >
                    <p>
                        Cannot load resume: Please visit{" "}
                        <a
                            href="https://www.linkedin.com/in/kaustubh-talathi-5a3a088/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin profile:
                        </a>
                    </p>
                </object>
            </div>
        </>
    );
}

export default Resume;
