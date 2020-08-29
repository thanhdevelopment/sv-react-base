import React from 'react';

function Footer() {
    return (
        <div className="coco-footer-wrap">
            <div className="coco-footer-wrap--content">
                <div className="coco-footer--wrap">
                    <div className="coco-footer--wrap__left">
                        <div className="coco-footer--wrap__logo">
                            <img src="/media/images/big-logo-coco.svg" />
                        </div>
                        <div className="coco-footer--wrap__image">
                            <img src="/media/images/bocongthuong_small.png" />
                        </div>
                        <div className="coco-footer--wrap__icon">
                            <img src="/media/images/ic-facebook.svg" />
                            <img src="/media/images/ic-insta.svg" />
                            <img src="/media/images/ic-youtube.svg" />
                            <img src="/media/images/ic-google-plus.svg" />
                        </div>
                    </div>
                    <div className="coco-footer--wrap__center">
                        <div className="coco-footer--wrap__textarea">
                            COCO SHOP là hệ thống mỹ phẩm chính hãng và uy tín có quy mô lớn
                            số 1 Việt Nam,đa dạng các loại mỹ phẩm đến từ các hãng nổi tiếng
                            trên toàn thế giới,,,Đến với COCOSHOP các bạn có quyền được yên
                            tâm khi mua sắm cũng như được đáp ứng mọi nhu cầu về làm đẹp. Với
                            phương châm luôn nỗ lực vì khách hàng thân yêu, COCOSHOP không
                            ngừng cố gắng để xứng đáng là địa điểm mua săm tin cậy trong lòng
                            các bạn trẻ
                        </div>
                        <div className="coco-footer--wrap__image">
                            <img src="/media/images/Image 14.png" />
                        </div>
                    </div>
                    <div className="coco-footer--wrap__right">
                        <div className="coco-footer--wrap__top">
                            <div className="coco-footer--wrap__top__title">HỖ TRỢ KHÁCH HÀNG</div>
                            <div className="coco-footer--wrap__top__subtitle">
                                <span>Hướng dẫn mua hàng...</span>
                                <span>Giải đáp thắc mắc</span>
                                <span>Chính sách đổi trả</span>
                            </div>
                        </div>
                        <div className="coco-footer--wrap__center">
                            <div className="coco-footer--wrap__center__title">LIÊN HỆ VỚI CHÚNG TÔI</div>
                            <div className="coco-footer--wrap__center__subtitle">
                                <div>
                                    <img src="/media/images/ic-phone.svg" />
                                    <span>Điện thoại: +84-988888290</span>
                                </div>
                                <div>
                                    <img src="/media/images/ic-mail.svg" />
                                    <span>Email: cskh@cocoshop.vn</span>
                                </div>
                                <div>
                                    <img src="/media/images/ic-global.svg" />
                                    <span>Website: http://cocoshop.vn</span>
                                </div>
                            </div>
                        </div>
                        <div className="coco-footer--wrap__bottom">
                            <div className="coco-footer--wrap__bottom__title">TẢI ỨNG DỤNG COCO SHOP</div>
                            <div className="coco-footer--wrap__bottom__content">
                                <img src="/media/images/ic-qrcode.png" />
                                <div>
                                    <div>
                                        <img src="/media/images/ic-appstore.svg" />
                                        <span> App Store</span>
                                    </div>
                                    <div>
                                        <img src="/media/images/ic-googleplay.svg" />
                                        <span> Google Play</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coco-footer--copyright">
                    <span>
                        © Bản quyền thuộc về Coco Shop - Chuỗi cửa hàng mỹ phẩm chính hãng
                        làm đẹp.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
