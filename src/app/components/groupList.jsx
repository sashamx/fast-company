import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (Array.isArray(items)) {
        return (
            <div className="list-group">
                {items.map((item) => (
                    <button
                        key={item[valueProperty]}
                        type="button"
                        className={
                            "list-group-item list-group-item-action" +
                            (_.isEqual(item, selectedItem) ? " active" : "")
                        }
                        aria-current="true"
                        onClick={() => onItemSelect(item)}
                    >
                        {item[contentProperty]}
                    </button>
                ))}
            </div>
        );
    } else {
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
                        onClick={() => onItemSelect(items[item])}
                    >
                        {items[item][contentProperty]}
                    </button>
                ))}
            </div>
        );
    }
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
