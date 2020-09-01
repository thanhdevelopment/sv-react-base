import React from "react";

export default ({
    name,
    text,
    option,
    value,
    className,
    ...props
}) => {
    return (
        <div className={`coco-selectbox ${className}`}>
            <select>
                <option>{option}</option>
            </select>
            <img src="/media/images/ic-selectbox.svg" alt="" />
        </div>
    );
};
