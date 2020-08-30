import React, { useState, useEffect } from "react";
import PaginationPage from "../../components/pagination/pagination-page";
import PaginationRedirect from "../../components/pagination/pagination-redirect";
import ItemProduct from "../../components/items/item-product";
import Button from "../../components/buttons/button";
import SelectBox from "../../components/select-box";
// import "bootstrap/dist/css/bootstrap.min.css";

const CardDetail = (props) => {
    // const [activePage, setActivePage] = useState(null);
    const [listProduct, setListProduct] = useState([]);
    const [DataAfterPagination, setDataAfterPagination] = useState([]);
    const {
        marginTop,
        titleCard,
        lstProduct,
        totalProduct
    } = props;

    useEffect(() => {
        if (lstProduct) {
            setListProduct(lstProduct);
        }
    }, []);

    return (
        <div className="card-list-item" style={{ marginTop: marginTop }}>
            <div className="card-list-item--header">
                {titleCard}
                <span style={{ display: totalProduct ? "" : "none" }}>
                    ({totalProduct} sản phẩm)
                </span>
            </div>
            <div className="card-list-item--content">
                <div className="coco-navbar header-navbar nav-flex nav-padding">
                    <div className="ccs-navbar--left nav-flex-left ">
                        <span>Sắp xếp theo</span>
                        <Button text="Nổi bật" className="ccs-btn-nav" />
                        <Button text="Bán chạy" className="ccs-btn-nav" />
                        <Button text="Hàng mới" className="ccs-btn-nav" />
                        <Button text="Khuyến mại" className="ccs-btn-nav" />
                        <Button text="Tên sản phẩm" className="ccs-btn-nav" />
                        <SelectBox
                            option="Giá sản phẩm"
                            className="ccs-selectbox ccs-select-price"
                        />
                    </div>
                    <div className="ccs-navbar--right nav-flex-right">
                        <PaginationPage
                            data={lstProduct}
                            setDataAfterPagination={setDataAfterPagination}
                        />
                    </div>
                </div>
                <div className="coco-list-item">
                    {DataAfterPagination
                        ? DataAfterPagination.map((item, index) => {
                            return <ItemProduct
                                customPadding="item-pd-8-16"
                                hiddenLabel='none'
                                hiddenDiscount='none'
                                hiddenCountdown='none'
                                key={index}
                            />;
                        })
                        : listProduct.map((item, index) => {
                            return <ItemProduct
                                customPadding="item-pd-8-16"
                                hiddenLabel='none'
                                hiddenDiscount='none'
                                hiddenCountdown='none'
                                key={index}
                            />;
                        })}
                </div>
                <PaginationRedirect />
            </div>
        </div >
    );
};

export default CardDetail;
