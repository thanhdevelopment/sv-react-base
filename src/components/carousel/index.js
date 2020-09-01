import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BtnNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img
                src="/media/images/ic-next.svg"
                alt=""
            />
        </div>
    );
}

function BtnPrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img
                src="/media/images/ic-next.svg"
                alt=""
            />
        </div>
    );
}

class Carousel extends Component {
    render() {
        const {
            typeSlider,
            className,
            setSlidesToShow,
            setSlidesToScroll,
            children
        } = this.props;
        const horizontalSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: setSlidesToShow ? setSlidesToShow : 6,
            slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 6,
            nextArrow: <BtnNextArrow />,
            prevArrow: <BtnPrevArrow />
        };
        const verticalSettings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            speed: 500,
            slidesPerRow: 2,
            nextArrow: <BtnNextArrow />,
            prevArrow: <BtnPrevArrow />
        };
        const slideShowSettings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            nextArrow: <BtnNextArrow />,
            prevArrow: <BtnPrevArrow />
        };
        if (typeSlider === 1) {
            return (
                <Slider {...horizontalSettings} className={className}>
                    {children}
                </Slider>
            );
        } else if (typeSlider === 2) {
            return (
                <Slider {...verticalSettings} className={className}>
                    {children}
                </Slider>
            );
        } else if (typeSlider === 3) {
            return (
                <Slider {...slideShowSettings} className={className}>
                    {children}
                </Slider>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
export default Carousel;