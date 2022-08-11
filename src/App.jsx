import React, { useState } from "react";
import API from "./api";
import Users from './components/users';
import Status from "./components/searchStatus";
import Header from "./components/header";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const headers = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное']

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    }

    const handleToogleBookMark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                user = { ...user, bookmark: !user.bookmark }
            }
            return user;
        })

        setUsers(newUsers);
    }

    return (
        <>
            <Status count={users.length} />
            <table className="table">
                <thead>
                    <Header headers={headers} />
                </thead>
                <tbody>    
                    <Users users={users} onDelete={handleDelete} onBookmark={handleToogleBookMark} />
                </tbody>
            </table>
        </>
    )
}

export default App;