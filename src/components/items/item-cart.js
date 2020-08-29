import React, { Component } from "react";
class ItemCart extends Component {
    render() {
        return (
            <div className="ccs-cart-product">
                <div className="ccs-cart-product--thumb">
                    <img src="/media/images/product-sm-1.png" alt="" />
                </div>
                <div className="ccs-cart-product--body">
                    <div className="ccs-cart-product--body__title">M.O.I</div>
                    <div className="ccs-cart-product--body__subtitle">Son Kem Lì M.O.I S-Girls 03 Sexy</div>
                    <span>Quà Tặng: Bông Tẩy Trang Silcot 82 Miếng (Sl có hạn)</span>
                </div>
            </div>
        );
    }
};

export default ItemCart;
