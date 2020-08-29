import React, { Component } from "react";
import Slider from "../carousel";
import ItemProduct from "../items/item-product";
import CardHeader from "./card-header";

class CardVertical extends Component {
    render() {
        const {
            data,
            lstTab,
            posterTitle,
            posterImg,
            mode,
            marginTop,
        } = this.props;
        return (
            <div
                className={`ccs-card card-vertical 
                ${mode === "reverse" ? "card-vertical--reverse" : ""}`}
                style={{ marginTop: marginTop }}
            >
                <div className="ccs-card--left">
                    <CardHeader
                        type="poster"
                        posterTitle={posterTitle}
                        posterImg={posterImg}
                    />
                </div>
                <div className="ccs-card--right">
                    <CardHeader
                        type="tab"
                        data={lstTab}
                    />
                    <div className="ccs-card--right__content">
                        <Slider typeSlider={2} className="slider-vertical">
                            {data.map((item, index) => {
                                return (
                                    <ItemProduct
                                        customPadding="item-pd-8-16"
                                        hiddenLabel='none'
                                        hiddenDiscount='none'
                                        hiddenCountdown='none'
                                    />
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
};

export default CardVertical;
