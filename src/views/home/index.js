import React from 'react';

import Banner from '../../components/banners';
import CardHorizontal from '../../components/cards/card-horizontal';
import CardVertical from '../../components/cards/card-vertical';
import CardBrand from '../../components/cards/card-brand';
import CardArticle from '../../components/cards/card-article';
import ItemStore from '../../components/items/item-store';

function Home() {
    const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    const arr3 = ["1", "1", "1", "1"];
    const arr4 = ["1", "1", "1", "1", "1"];
    return (
        <div className="coco-home-wrap">
            <div className="coco-home-content1">
                <div className="home-content1--left"></div>
                <div className="home-content1--right">
                    <Banner />
                </div>
            </div>

            <CardHorizontal
                type="horizontal"
                data={arr2}
                marginTop="32px"
                displayTimeBox="block"
                logoHeader="/media/images/logo-flashsale.svg"
            />

            <CardBrand
                data={arr2}
                marginTop="56px"
                titleHeader="THƯƠNG HIỆU NỔI BẬT"
                borderBottom={true}
            />

            {/* Poster */}
            <div className="hpl__poster">
                <img src="/media/images/Rectangle 20.jpg" alt="" />
                <img src="/media/images/Rectangle 21.jpg" alt="" />
            </div>

            <CardVertical
                posterTitle="TRANG ĐIỂM"
                posterImg="/media/images/Rectangle 25.jpg"
                marginTop="72px"
                data={arr2}
                lstTab={["Trang Điểm Mặt", "Trang Điểm Vùng Mắt", "Tẩy trang"]}
            />

            {/* Banner */}
            <div className="hpl__banner1">
                <img src="/media/images/Rectangle.jpg" alt="" />
                <img src="/media/images/Rectangle 27.jpg" alt="" />
                <img src="/media/images/Rectangle 26.jpg" alt="" />
            </div>


            <CardVertical
                posterTitle="SON MÔI"
                posterImg="/media/images/Rectangle 31.jpg"
                mode="reverse"
                marginTop="72px"
                data={arr2}
                lstTab={[
                    "Son Môi",
                    "Kẻ Viền Môi",
                    "Tẩy Tế Bào Chết Môi",
                    "Mặt Nạ Môi",
                ]}
            />

            {/* Banner */}
            <div className="hpl__banner2">
                <img src="/media/images/Image 89.png" alt="" />
            </div>

            {/* BÀI VIẾT & SỰ KIỆN */}
            <CardArticle
                titleHeader="BÀI VIẾT & SỰ KIỆN"
                btnExternal="Xem THÊM"
                marginTop="56px"
                borderBottom={true}
                data={arr3}
            />

            {/* DANH SÁCH CỬA HÀNG */}
            <div className="hpl__store">
                <div className="hpls__title">DANH SÁCH CỬA HÀNG</div>
                <div className="hpls_lstStore">
                    <ItemStore />
                    <ItemStore />
                    <ItemStore />
                    <ItemStore />
                </div>
            </div>
        </div>
    );
}

export default Home;
