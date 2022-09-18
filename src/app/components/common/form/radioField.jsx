import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, name, onChange, value, label }) => {
    const handelechange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <div>
                {options &&
                    options.map((option) => (
                        <div
                            key={option.name + "_" + option.value}
                            className="form-check form-check-inline"
                        >
                            <input
                                type="radio"
                                className="form-check-input"
                                id={option.name + "_" + option.value}
                                name={name}
                                value={option.value}
                                checked={option.value === value}
                                onChange={handelechange}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={option.name + "_" + option.value}
                            >
                                {option.name}
                            </label>
                        </div>
                    ))}
            </div>
        </div>
    );
};

RadioField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string
};

export default RadioField;
