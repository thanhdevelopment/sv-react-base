import React from "react";

const LazyLoading = () => {
    return (
        <div className="lazyloading-item">
            <div className="lazyloading-item--thumnail">
                <img src="/media/images/lazyload-background.svg" alt="" />
            </div>
            <div className="lazyloading-item--title"></div>
            <div className="lazyloading-item--price"></div>
        </div>
    );
}

export default LazyLoading;