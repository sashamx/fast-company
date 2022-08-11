import React from "react";
import Qualitie from "./qualitle";
import Bookmark from "./bookmark";

const User = ({ user, onDelete, onBookmark }) => {

    return (
        <tr key={user._id} className="user">
            <td>{user.name}</td>
            <td><Qualitie qualities={user.qualities} /></td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <Bookmark user={user} onBookmark={onBookmark} />
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

export default User;