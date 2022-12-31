import { GiHood } from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral-focus text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <GiHood className="inline pr-2 text-3xl" />
                    <Link to="/" className="text-lg font-bold align-middle">
                        {title}
                    </Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link
                            to="/"
                            className="btn btn-ghost btn-sm rounded-btn"
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className="btn btn-ghost btn-sm rounded-btn"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/demos"
                            className="btn btn-ghost btn-sm rounded-btn"
                        >
                            Demos
                        </Link>
                        <Link
                            to="/resume"
                            className="btn btn-ghost btn-sm rounded-btn"
                        >
                            Resume
                        </Link>
                        <Link
                            to="/certifications"
                            className="btn btn-ghost btn-sm rounded-btn"
                        >
                            Certifications
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.defaultProps = {
    title: "Kaustubh Talathi",
};

Navbar.propTypes = {
    title: PropTypes.string,
};

export default Navbar;
