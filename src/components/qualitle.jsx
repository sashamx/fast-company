import React from "react";

const Qualitie = ({ qualities }) => {
    return qualities.map((qualitie) => (
        <span key={qualitie._id} className={`badge bg-${qualitie.color} me-2`}>
            {qualitie.name}
        </span>
    ));
};

export default Qualitie;
