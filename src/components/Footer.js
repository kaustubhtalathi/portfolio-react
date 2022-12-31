import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

function Footer() {
    const fullYear = new Date().getFullYear();

    return (
        <div className="footer footer-center p-10 bg-neutral text-neutral-content">
            <p>Copyright &copy; {fullYear}</p>

            <div className="flex justify-space-around v-align">
                <a
                    href="https://www.github.com/kaustubhtalathi"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaGithub className="text-3xl" />
                </a>
                <a
                    href="https://www.linkedin.com/in/kaustubh-talathi-5a3a088/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaLinkedin className="text-3xl" />
                </a>
                <a
                    href="https://medium.com/@kaustubhtalathi/latest"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaMedium className="text-3xl" />
                </a>
                <a
                    href="https://www.twitter.com/kaustubhtalathi"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FaTwitter className="text-3xl" />
                </a>
            </div>

            <p>Made with React, Tailwind, DaisyUI &amp; deployed on AWS</p>
        </div>
    );
}

export default Footer;
