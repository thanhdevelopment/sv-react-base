import React, { Component } from "react";
import Slider from "../carousel";
import Item from "../items/item-product";
import CardHeader from "./card-header";

class CardHorizontal extends Component {
    render() {
        const {
            data,
            marginTop,
            className,
            titleHeader,
            displayTimeBox,
            logoHeader
        } = this.props;
        return (
            <div
                className={`ccs-card card-horizontal ${className}`}
                style={{ marginTop: marginTop }}
            >
                <CardHeader
                    type="header"
                    titleHeader={titleHeader}
                    logoHeader={logoHeader}
                    displayTimeBox={displayTimeBox}
                />
                <Slider typeSlider={1} className="list-product-horizontal--slider">
                    {data.map((item, index) => {
                        return (
                            <Item
                                customPadding="item-pd-8-12"
                            />
                        );
                    })}
                </Slider>
            </div>
        );
    }
};

export default CardHorizontal;
