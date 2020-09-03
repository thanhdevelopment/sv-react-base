import React, { Component } from "react";
class ItemCart extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="ccs-cart-product">
                <div className="ccs-cart-product--thumb">
                    <img src="/media/images/product-sm-1.png" alt="" />
                </div>
                <div className="ccs-cart-product--body">
                    <div className="ccs-cart-product--body__title">M.O.I</div>
                    <div
                        className="ccs-cart-product--body__subtitle"
                        title='Son Kem Lì M.O.I S-Girls 03 Sexy'>
                        Son Kem Lì M.O.I S-Girls 03 Sexy
                        </div>
                    {/* <span>Quà Tặng: Bông Tẩy Trang Silcot 82 Miếng (Sl có hạn)</span> */}
                    <div className="product-body-custom">{children}</div>
                </div>
            </div>
        );
    }
};

export default ItemCart;
