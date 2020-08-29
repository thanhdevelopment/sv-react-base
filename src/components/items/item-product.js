import React, { Component } from "react";
import Button from "../buttons/button";
class ItemProduct extends Component {
    render() {
        const {
            customPadding,
            hiddenLabel,
            hiddenDiscount,
            hiddenCountdown,
            setWidthCountdown
        } = this.props;
        return (
            <div className={`ccs-item-wrap ccs-item-wrap-active ${customPadding}`}>
                <div className={`ccs-item-wrap-active--hovered ${customPadding}`}>
                    <div className="ccs-item-wrap-active--title">
                        Kem Chống Nắng The Saem Eco Earth Power
                 </div>
                    <div className="ccs-item-wrap-active--button">
                        <Button
                            text={<img src="/media/images/ic-heart.svg" alt="" />}
                            className="ccs-btn ccs-btn-like"
                        />
                        <Button
                            text={<img src="/media/images/ic-cart-red.svg" alt="" />}
                            className="ccs-btn ccs-btn-cart"
                        />
                        <Button
                            text="Mua ngay"
                            className="ccs-btn ccs-btn-buy"
                        />
                    </div>
                </div>
                <div
                    className="ccs-item-wrap--label"
                    style={{ display: hiddenLabel }}>
                    <img src="/media/images/ic-new.svg" alt="" />
                </div>
                <img src="/media/images/product3.jpg" alt="" />
                <div
                    className="ccs-item-wrap--discount"
                    style={{ display: hiddenDiscount }}>
                    <span>-15%</span>
                </div>
                <div className="ccs-item-wrap--title" >
                    Nước tẩy trang Eucerin dành cho mọi loại da
            </div>
                <div className="ccs-item-wrap--price">
                    <span>211.500 đ</span>
                    <span>235.500 đ</span>
                </div>
                <div
                    className="ccs-item-wrap--countdown"
                    style={{ display: hiddenCountdown }}>
                    <div
                        style={{
                            width: setWidthCountdown ? setWidthCountdown : "26%",
                        }}
                    ></div>
                    <span>Còn lại 12 ngày 13:27:17</span>
                </div>
            </div>
        );
    }
};

export default ItemProduct;
