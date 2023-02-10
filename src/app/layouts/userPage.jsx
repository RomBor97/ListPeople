import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "../components/qualitiesList";

const UserPage = () => {
    const params = useParams();
    const userId = params.userId;
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });
    const handleClickAllUsers = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div key={userId}>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <h3>Встречался раз: {user.completedMeetings}</h3>
                <h3>Оценка: {user.rate}</h3>
                <button onClick={handleClickAllUsers}>Все пользователи</button>
            </div>
        );
    } else {
        <h1>Loading</h1>;
    }
};
UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
