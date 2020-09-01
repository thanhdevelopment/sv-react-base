import React from "react";
import Slider from "../carousel";

const Banner = () => {
    return (
        <div className="ccs-banner-wrap">
            <div className="ccs-banner-wrap--left">
                <Slider typeSlider={3} className="ccs-banner--slideshow">
                    <img src="/media/images/Rectangle 5.jpg" alt="" />
                    <img src="/media/images/Rectangle 5.jpg" alt="" />
                    <img src="/media/images/Rectangle 5.jpg" alt="" />
                </Slider>
            </div>
            <div className="ccs-banner-wrap--right">
                <img src="/media/images/Rectangle 5114.jpg" alt="" />
                <img src="/media/images/Rectangle 5113.jpg" alt="" />
            </div>
        </div>
    );
}

export default Banner;