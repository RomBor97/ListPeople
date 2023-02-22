import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        if (number > 4 && number < 15) {
            return `${number} человек тусанет с тобой сегодня`;
        }
        if (number >= 2 && number <= 4) {
            return `${number} человека тусанут с тобой сегодня`;
        }
        if (number === 1) {
            return `${number} человек тусанет с тобой сегодня`;
        }
    };

    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0 ? renderPhrase(length) : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = { length: PropTypes.number };

export default SearchStatus;
