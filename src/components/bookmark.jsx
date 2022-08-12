import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ user, onBookmark }) => {
    return (
        <i
            className={user.bookmark ? "bi-bookmark-check-fill" : "bi-bookmark"}
            onClick={() => onBookmark(user._id)}
        ></i>
    );
};

Bookmark.propTypes = {
    user: PropTypes.object.isRequired,
    onBookmark: PropTypes.func.isRequired
};

export default Bookmark;
