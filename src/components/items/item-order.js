import React, { Component } from "react";
class ItemOrder extends Component {
    render() {
        return (
            <div className="ccs-cart-item-order">
                <div className="ccs-cart-item-order--thumb">
                    <img src="/media/images/product-sm-1.png" alt="" />
                </div>
                <div className="ccs-cart-item-order--body">
                    <div className="ccs-cart-item-order--title">M.O.I</div>
                    <div className="ccs-cart-item-order--subtitle">Son Kem Lì M.O.I S-Girls 03 Sexy</div>
                    <span>SL: 1</span>
                </div>
                <div className="ccs-cart-item-order--price">211.500 đ</div>
            </div>
        );
    }
};

export default ItemOrder;
