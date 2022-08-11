import React from "react";

const Header = ({ headers }) => {
    return (
        <tr>
            { headers.map((name, i) => <th key={i} scope="col">{name}</th>) }
        </tr>
    )
}

export default Header;