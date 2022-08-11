import React from "react";

const Status = ({ count }) => {
    return count > 0 ? 
        <h2><span className="badge bg-primary">{count} человек тусанет с тобой сегодня</span></h2> : 
        <h2><span className="badge bg-danger">Никто с тобой не тусанет</span></h2>;
}

export default Status;