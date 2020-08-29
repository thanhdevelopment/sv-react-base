import React from 'react';

// Components
import HeaderTop from '../headers/header-top';
import HeaderCenter from '../headers/header-center';
import HeaderBottom from '../headers/header-bottom';
import Footer from '../footers/footer';

const Wrapper = (props) => {
    const { children } = props;
    return (
        <div className={'coco-page-wrapper'}>
            <div className="coco-page-wrapper--header">
                <HeaderTop />
                <HeaderCenter />
                <HeaderBottom />
            </div>

            {/* begin:: container */}
            <div className={'container'}>
                {children}
            </div>
            {/* end:: container */}

            {/* begin:: footer */}
            <div className="footer">
                <Footer />
            </div>
            {/* end:: footer */}

            {/* begin:: floating icons */}
            <div className={'coco-floating-icons__wrapper'}>
                <div className="coco-floating-icons__wrapper--icons">
                    <img src="/media/images/ic-fb-color.svg" />
                    <img src="/media/images/ic-youtube-color.svg" />
                    <img src="/media/images/ic-insta-color.svg" />
                    <img src="/media/images/ic-social-color.svg" />
                </div>
                <div className="coco-floating-icons__wrapper--scrolltop" >
                    <img src="/media/images/ic-btn-to-top.svg" />
                </div>
            </div>

            {/* begin:: chatBox */}
            <div className={'coco-chatbox__wrapper'} >
                <div className="">
                    <span> Chat với chúng tôi</span>
                    <img src="/media/images/ic-arrowtop.svg" />
                </div>
                <img src="/media/images/ic-close.svg" />
            </div>
        </div>
    );
};
export default Wrapper;
