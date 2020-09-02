import React, { useState, useEffect } from "react";
import Filter from "../../components/filters/filer-default";
import BreadCrumb from "../../components/breadcum";
import CardDetail from "../../components/cards/card-detail";
import CardHorizontal from "../../components/cards/card-horizontal";

const Search = () => {
    const demoData = () => {
        let data = [];
        for (let i = 0; i < 110; i++) {
            data.push([i]);
        }
        return data;
    };
    const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    useEffect(() => {
        demoData();
    }, []);

    return (
        <div className="coco-search-wrap">
            <BreadCrumb
                firstUrl="Trang điểm"
                firstRouter="#"
                secondUrl="Trang điểm mặt"
                secondRouter="#"
            />
            <div className="coco-search-wrap--body">
                <div className="coco-search__left">
                    <Filter marginTop="32px" data={["1", "2", "3"]} />
                </div>
                <div className="coco-search__right">
                    <CardDetail
                        titleCard="Trang Điểm Mặt"
                        marginTop="32px"
                        lstProduct={demoData()}
                    />
                </div>
            </div>
            <div className="coco-search-wrap--bottom">
                <CardHorizontal
                    data={arr2}
                    marginTop="64px"
                    titleHeader="SẢN PHẨM ĐÃ XEM"
                    className="trangdiem-list-product-horizontal"
                />
            </div>
        </div>
    );
};

export default Search;
