import React, { useState } from "react";
import API from "../api";

const Users = () => {
    console.log(API.users.fetchAll());
    const headers = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка']
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter(user => user._id !== userId))
    }

    const renderPharse = (number) => {
        return number > 0 ? 
                <h2><span className="badge bg-primary">{number} человек тусанет с тобой сегодня</span></h2> : 
                <h2><span className="badge bg-danger">Никто с тобой не тусанет</span></h2>;
    }

    const renderQualities = (qualities) => {
        return qualities.map((qualitie) => <span key={qualitie._id} className={`badge bg-${qualitie.color} me-2`}>{qualitie.name}</span>);        
    } 

    return (
        <>
            {renderPharse(users.length)}
            <table className="table">
                <thead>
                    <tr>
                        { headers.map((name, i) => <th key={i} scope="col">{name}</th>) }
                    </tr>
                </thead>
                <tbody>    
                    { users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{renderQualities(user.qualities)}</td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}/5</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    delete2222
                                </button>
                            </td>
                        </tr>
                    )) }    
                </tbody>
            </table>
        </>
    )
}

export default Users;