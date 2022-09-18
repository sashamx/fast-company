import React from "react";
import UserEditPage from "../components/page/userPage/userEditPage";

const EditUser = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <UserEditPage />
                </div>
            </div>
        </div>
    );
};

export default EditUser;
