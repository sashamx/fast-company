import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSecect,
    selectedItem
}) => {
    return (
        <div className="list-group">
            {Object.keys(items).map((item) => (
                <button
                    key={items[item][valueProperty]}
                    type="button"
                    className={
                        "list-group-item list-group-item-action" +
                        (items[item] === selectedItem ? " active" : "")
                    }
                    aria-current="true"
                    onClick={() => onItemSecect(items[item])}
                >
                    {items[item][contentProperty]}
                </button>
            ))}
        </div>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSecect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
