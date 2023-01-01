import Title from "../components/Title";

import { useState } from "react";
// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/cjs/entry.webpack";

function Resume() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <Title titleText={"Resume"} />

            <Document
                file="/assets/pdf/resume.pdf"
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>

            {/* <div className="flex justify-center">
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
            </div> */}
        </>
    );
}

export default Resume;
