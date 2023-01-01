import Title from "../components/Title";

import { useState } from "react";
import { Document, Page } from "react-pdf";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <Title titleText={"Resume"} />

            <div className="flex justify-center">
                <iframe
                    width="500"
                    height="1000"
                    title="resume"
                    src="/assets/pdf/resume.pdf"
                    style={{
                        WebkitTransform: "scale(1.5)",
                        marginTop: "400px",
                    }}
                ></iframe>
            </div>
        </>
    );
}

export default Resume;
