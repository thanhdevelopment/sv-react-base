import React, { Component } from "react";
import Slider from "../carousel";
import ItemBrand from "../items/item-brand";
import CardHeader from "./card-header";

class CardBrand extends Component {
    render() {
        const {
            data,
            titleHeader,
            className,
            displayTimeBox,
            borderBottom,
            marginTop,
        } = this.props;
        return (
            <div
                className={`ccs-card card-brand ${className}`}
                style={{ marginTop: marginTop }}
            >
                <CardHeader
                    type="header"
                    titleHeader={titleHeader}
                    displayTimeBox={displayTimeBox}
                    borderBottom={borderBottom}
                />
                <Slider typeSlider={1} className="list-brand-slider">
                    {data.map((item, index) => {
                        return (
                            <ItemBrand />
                        );
                    })}
                </Slider>
            </div>
        );
    }
};

export default CardBrand;
