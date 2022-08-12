import React from "react";
import PropTypes from "prop-types";

const Header = ({ headers }) => {
    return (
        <tr>
            {headers.map((name, i) => (
                <th key={i} scope="col">
                    {name}
                </th>
            ))}
        </tr>
    );
};

Header.propTypes = {
    headers: PropTypes.array.isRequired
};

export default Header;
