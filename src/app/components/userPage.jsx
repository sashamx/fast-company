import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qualitiesLiast";

const UserPage = ({ id }) => {
    const [user, setUser] = useState(null);

    const history = useHistory();

    useEffect(() => {
        api.users.default.getUserById(id).then((data) => setUser(data));
    }, []);

    const handleBack = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div className="m-3">
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <h3>completedMeetings: {user.completedMeetings}</h3>
                <h3>Rate: {user.rate}</h3>
                <button onClick={() => handleBack()}>Все пользователи</button>
            </div>
        );
    }

    return "Loading...";
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
