import PropTypes from "prop-types";

function Title({ titleText }) {
    return (
        <h1 className="text-5xl font-bold text-center w-full mb-10">
            {titleText}
        </h1>
    );
}

Title.defaultProps = {
    titleText: "This is a title",
};

Title.propTypes = {
    titleText: PropTypes.string,
};

export default Title;
