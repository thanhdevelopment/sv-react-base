import React from 'react';

function HeaderBottom() {
    const FAKE_DATA = [
        'TRANG ĐIỂM',
        'SON MÔI',
        'CHĂM SÓC DA',
        'CHĂM SÓC CƠ THỂ',
        'CHĂM SÓC TÓC',
        'DỤNG CỤ',
        'NƯỚC HOA',
        'MỸ PHẨM HIGH END',
        'COMBO',
        'THỰC PHẨM CHỨC NĂNG',
        'SẢN PHẨM KHÁC',
    ];

    return (
        <div className="header-bottom">
            {/* begin:: menu left */}
            <div className="header-bottom--left">
                <div className="header-bottom--left__dropdown">
                    <div className="header-bottom--left__hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <span>DANH MỤC SẢN PHẨM</span>
                    <div className={'header-bottom--left__content'}>
                        {
                            FAKE_DATA.map(item => (
                                <div className="header-bottom--left__item" key={item}>
                                    <span>{item}</span>
                                    <img src="/media/images/ic-arrowback.svg" />
                                    <div className="header-bottom--left__item__child">
                                        <div>
                                            <div className="header-bottom--left__item--detail">
                                                <div className="header-bottom--left__item--header">
                                                    <div>
                                                        <span>Nổi bật</span>
                                                    </div>
                                                    <div>
                                                        <span>Bán chạy</span>
                                                    </div>
                                                    <div>
                                                        <span>Hàng mới</span>
                                                    </div>
                                                    <div>
                                                        <span>Khuyến mại</span>
                                                    </div>
                                                </div>
                                                <div className="header-bottom--left__item--content">
                                                    <div className="coco-mdddic-block1_content__col">
                                                        <div className="coco-mdddic-block1-content_col__title">
                                                            Trang Điểm Mặt
                                                        </div>
                                                        <div className="coco-mdddic-block1-content_col__subtitle">
                                                            <span>Kem Nền</span>
                                                            <span>Kem Lót</span>
                                                            <span>Che Khuyết Điểm</span>
                                                            <span>Phấn Má Hồng</span>
                                                            <span>Phấn Nước Cushion</span>
                                                            <span>Phấn Phủ</span>
                                                            <span>Tạo Khối - Highlighter</span>
                                                        </div>
                                                    </div>
                                                    <div className="coco-mdddic-block1_content__col">
                                                        <div className="coco-mdddic-block1-content_col__title">
                                                            Trang Điểm Vùng Mắt
                                                        </div>
                                                        <div className="coco-mdddic-block1-content_col__subtitle">
                                                            <span>Kẻ Chân Mày</span>
                                                            <span>Kẻ Mắt</span>
                                                            <span>Mascara</span>
                                                            <span>Phấn Mắt</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="header-bottom--left__item--poster">
                                                <img src="/media/images/trangdiem.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* end:: menu left */}

            {/* begin:: menu right */}
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Giới thiệu</span>
                    <div className="header-bottom--right__item header-bottom--right__menu">
                        <div className="header-bottom-right__div">Hot Deals</div>
                        <div className="header-bottom-right__div">Flash Deals</div>
                        <div className="header-bottom-right__div">Đang diễn ra</div>
                    </div>
                </div>
            </div>
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Thương hiệu</span>
                    <div className="header-bottom--right__item header-bottom--right__menu">
                        <div className="header-bottom-right__div">Hot Deals</div>
                        <div className="header-bottom-right__div">Flash Deals</div>
                        <div className="header-bottom-right__div">Đang diễn ra</div>
                    </div>
                </div>
            </div>
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Khuyến mại</span>
                    <div className="header-bottom--right__item header-bottom--right__menu">
                        <div className="header-bottom-right__div">Hot Deals</div>
                        <div className="header-bottom-right__div">Flash Deals</div>
                        <div className="header-bottom-right__div">Đang diễn ra</div>
                    </div>
                </div>
            </div>
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Xu hướng làm đẹp</span>
                    <div className="header-bottom--right__item header-bottom--right__menu">
                        <div className="header-bottom-right__div">Hot Deals</div>
                        <div className="header-bottom-right__div">Flash Deals</div>
                        <div className="header-bottom-right__div">Đang diễn ra</div>
                    </div>
                </div>
            </div>
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Tra cứu đơn hàng</span>
                    <div className="header-bottom--right__item header-bottom--right__tracking">
                        <div>
                            <div>
                                <input placeholder="Nhập mã đơn hàng" />
                            </div>
                            {/* <Button
                                className="coco-mdxw-list-tracking__button"
                                text="Kiểm tra đơn hàng"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Tải ứng dụng</span>
                    <div className="header-bottom--right__item header-bottom--right__app">
                        <div>
                            <img src="/media/images/app-qrcode.png" />
                            <div className="coco-mdxw-list-app_icon">
                                <div>
                                    <img src="/media/images/ic-appstore-black.svg" />
                                    <span> App Store</span>
                                </div>
                                <div>
                                    <img src="/media/images/ic-googleplay-black.svg" />
                                    <span> Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Hỏi đáp</span>
                    <div className="header-bottom--right__item header-bottom--right__menu">
                        <div className="header-bottom-right__div">Hot Deals</div>
                        <div className="header-bottom-right__div">Flash Deals</div>
                        <div className="header-bottom-right__div">Đang diễn ra</div>
                    </div>
                </div>
            </div>
            <div className={'header-bottom--right'}>
                <div className="header-bottom--right__dropdown">
                    <span>Liên hệ</span>
                    <div className="header-bottom--right__item header-bottom--right__menu">
                        <div className="header-bottom-right__div">Hot Deals</div>
                        <div className="header-bottom-right__div">Flash Deals</div>
                        <div className="header-bottom-right__div">Đang diễn ra</div>
                    </div>
                </div>
            </div>
            {/* end:: menu right */}
        </div>
    );
}

export default HeaderBottom;
