import React from 'react';

const LayoutProfile = () => (
    <div className="profile-layout-wrapper">
        {/* left: maxwidth 224px */}
        <div className="profile-layout-left">
            <div className="profile-info">
                <div className="avatar">
                    <img src="" alt="" />
                </div>
                <div className="information">
                    <span>Tài khoản</span>
                    <span>Nguyễn Thùy Linh</span>
                </div>
            </div>
            <div className="nav-container">
                <div className="item">SẢN PHẨM YÊU THÍCH</div>
                <div className="item">ĐƠN HÀNG CỦA TÔI</div>
                <div className="item">THÔNG TIN TÀI KHOẢN</div>
                <div className="item">ĐỊA CHỈ NHẬN HÀNG</div>
                <div className="item">QUẢN LÝ COCO COIN</div>
                <div className="item">VÍ VOUCHER</div>
                <div className="item">THAY ĐỔI MẬT KHẨU</div>
            </div>
        </div>
        <div className="profile-layout-right">
            {/* right: maxwidth 1096px */}
            profile-layout-right
        </div>
    </div>
);

export default LayoutProfile;

