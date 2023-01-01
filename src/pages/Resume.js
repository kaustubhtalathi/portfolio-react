import Title from "../components/Title";

import { useState } from "react";
// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/cjs/entry.webpack";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [isError, setIsError] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
        setIsError(false);
        setNumPages(numPages);
    }

    function onDocumentLoadError() {
        setIsError(true);
    }

    if (isError) {
        return (
            <>
                <Title titleText={"Resume"} />

                <p className="text-center">
                    There was an error to load the document. Please contact me
                    on Linkedin.
                </p>
            </>
        );
    }

    return (
        <>
            <Title titleText={"Resume"} />

            <Document
                file="/assets/pdf/resume.pdf"
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                onDocumentLoadErrorr={onDocumentLoadError}
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
