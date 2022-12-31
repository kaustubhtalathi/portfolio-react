import List from "../components/lists/List";
import Title from "../components/Title";

function Certifications() {
    const certifications = [
        {
            id: 1,
            title: "AWS Architect Associate",
            imageUrl:
                "/assets/images/certificationLogos/aws-solutions-architect-associate.png",
            url: "https://www.credly.com/badges/7f13284b-4dcf-4fa1-ab60-336e73a3ea63/public_url",
        },
        {
            id: 2,
            title: "AWS Developer Associate",
            imageUrl:
                "/assets/images/certificationLogos/aws-developer-associate.png",
            url: "https://www.credly.com/badges/eea9b89b-33e4-48e8-9d25-8ee978ad32d6/public_url",
        },
        {
            id: 3,
            title: "AWS Cloud Practitioner",
            imageUrl:
                "/assets/images/certificationLogos/aws-cloud-practitioner.png",
            url: "https://www.credly.com/badges/82ac65c5-99dc-4984-9b85-9f58768128a8/public_url",
        },
        {
            id: 4,
            title: "Professional Scrum Product Owner",
            imageUrl: "/assets/images/certificationLogos/PSPO1.png",
            url: "https://www.credly.com/badges/8ed0faf9-2da9-4e01-8ab6-d13d97469a78/public_url",
        },
        {
            id: 5,
            title: "Professional Scrum Product Owner",
            imageUrl: "/assets/images/certificationLogos/PSM1.png",
            url: "https://www.credly.com/badges/aef0a978-0d13-4335-8965-1d61e2d00b66/public_url",
        },
        {
            id: 6,
            title: "IBM Blockchain Essantials",
            imageUrl:
                "/assets/images/certificationLogos/Blockchain+Essentials.png",
            url: "",
        },
        {
            id: 7,
            title: "IBM Bluemix Essentials",
            imageUrl:
                "/assets/images/certificationLogos/Bluemix+Essentials+-+Knowledge+Badge.png",
            url: "",
        },
        {
            id: 8,
            title: "IBM Cloud Container Service",
            imageUrl:
                "/assets/images/certificationLogos/Cloud+Container+Service+_26+KBs.png",
            url: "",
        },
        {
            id: 9,
            title: "IBM Docker Essentials",
            imageUrl: "/assets/images/certificationLogos/Docker+Essentials.png",
            url: "",
        },
        {
            id: 10,
            title: "IBM Node Red",
            imageUrl:
                "/assets/images/certificationLogos/Node+RED+-+Knowledge+Badge.png",
            url: "",
        },
        {
            id: 11,
            title: "Sun Solaris asscociate",
            imageUrl: "/assets/images/certificationLogos/solaris-associate.png",
            url: "",
        },
        {
            id: 12,
            title: "W3Schools Certified",
            imageUrl:
                "/assets/images/certificationLogos/w3certified_biglogo.png",
            url: "",
        },
        {
            id: 13,
            title: "Microsoft HTML5 with JS & CSS3",
            imageUrl:
                "/assets/images/certificationLogos/Programming+in+HTML5+with+JavaScript+and+Css3-01.png",
            url: "",
        },
        {
            id: 14,
            title: "Microsoft HTML5 App Development Fundamentals",
            imageUrl:
                "/assets/images/certificationLogos/MTA-HTML5-Application-Development-Fundamentals.png",
            url: "",
        },
    ];

    return (
        <div>
            <Title titleText="Certifications" />
            <List items={certifications} />
        </div>
    );
}

export default Certifications;
