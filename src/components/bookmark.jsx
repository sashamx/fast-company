import React from "react";

const Bookmark = ({ user, onBookmark }) => {
    return <i className={user.bookmark ? 'bi-bookmark-check-fill' : 'bi-bookmark'} onClick={() => onBookmark(user._id)}></i>
}

export default Bookmark;