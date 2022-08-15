import React, { useState, useEffect } from "react";
import API from "./api";
import Users from "./components/users";
import Status from "./components/searchStatus";
import Header from "./components/header";
import Pagination from "./components/pagination";
import { pagination } from "./utils/pagination";
import GroupList from "./components/groupList";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const headers = [
        "Имя",
        "Качества",
        "Профессия",
        "Встретился, раз",
        "Оценка",
        "Избранное"
    ];

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToogleBookMark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                user = { ...user, bookmark: !user.bookmark };
            }
            return user;
        });

        setUsers(newUsers);
    };

    const counts = users.length;
    const pageSize = 4;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const userCorp = pagination(users, currentPage, pageSize);

    return (
        <>
            <Status count={users.length} />
            {professions && (
                <GroupList
                    selectedItem={selectedProf}
                    items={professions}
                    onItemSecect={handleProfessionSelect}
                />
            )}

            <table className="table">
                <thead>
                    <Header headers={headers} />
                </thead>
                <tbody>
                    <Users
                        users={userCorp}
                        onDelete={handleDelete}
                        onBookmark={handleToogleBookMark}
                    />
                </tbody>
            </table>
            <Pagination
                itemsCount={counts}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default App;
