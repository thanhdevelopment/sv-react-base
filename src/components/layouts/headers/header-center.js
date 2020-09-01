import React from 'react';

function HeaderCenter() {
    return (
        <div className="header-center">
            <div className="header-center--wrapper">
                <div className="header-center--wrapper__logo">
                    <a href='/'>
                        <img src='/media/images/logo_cocoshop.svg' alt="" />
                    </a>
                </div>
                <div className="header-center--wrapper__search">
                    <input
                        type='text'
                        name='home_search'
                        placeholder='Tìm sản phẩm, thương hiệu bạn mong muốn...'
                    />
                    <div>
                        <img src="/media/images/ic-search.svg" alt="" />
                    </div>
                </div>
                <div className="header-center--wrapper__account">
                    <img src="/media/images/ic-account.svg" alt="" />
                    <div>
                        <a href="/">Đăng nhập / Đăng ký</a>
                        <div>Tài khoản</div>
                        {/* <SelectBox option="Tài khoản" /> */}
                    </div>
                </div>
                <div className="header-center--wrapper__item">
                    <img src="/media/images/ic-like.svg" alt="" />
                    <div className="center-item--button">
                        <button>
                            <a href="#">
                                <img src="/media/images/ic-cart.svg" alt="" />
                                <span>Giỏ hàng</span>
                                <span>(1)</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderCenter;
