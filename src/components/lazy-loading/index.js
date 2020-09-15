import React from "react";

const LazyLoading = () => {
    return (
        <div className="lazy-loading-product-detail">
            <div className="tab-product--left">
                <div className="product-images-group">
                    <div className="product-images">
                        <div>
                            <img src="/media/images/lazyload-background.svg" alt="" />
                        </div>
                        <div>
                            <img src="/media/images/lazyload-background.svg" alt="" />
                        </div>
                        <div>
                            <img src="/media/images/lazyload-background.svg" alt="" />
                        </div>
                    </div>
                    <div className="product-thumbnail">
                        <img src="/media/images/lazyload-background.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="tab-product--right">
                <div className="product-name"></div>
                <div className="product-sub-info"></div>
                <div className="product-price"></div>
                <div className="lazy-load-form" style={{ marginTop: '40px' }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="lazy-load-form">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="lazy-load-form">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default LazyLoading;