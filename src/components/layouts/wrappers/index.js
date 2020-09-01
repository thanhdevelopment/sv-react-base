import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import HeaderTop from '../headers/header-top';
import HeaderCenter from '../headers/header-center';
import HeaderBottom from '../headers/header-bottom';
import Footer from '../footers/footer';

const Wrapper = (props) => {
    // State
    let [activeMenu, setActiveMenu] = useState(null);
    let [overFlow, setOverFlow] = useState(null);

    // Variables
    const { children } = props;
    const location = useLocation();

    useEffect(() => {
        setActiveMenu(location.pathname === "/" ? "coco-active-dropdown" : "");
    }, [location]);

    return (
        <div className={`coco-page-wrapper ${overFlow}`}>
            <div className="coco-page-wrapper--header">
                <HeaderTop />
                <HeaderCenter />
                <HeaderBottom
                    setOverFlow={setOverFlow}
                    activeMenu={activeMenu}
                />
            </div>

            {/* begin:: container */}
            <div className={`container ${overFlow}`}>
                {children}
            </div>
            {/* end:: container */}

            {/* begin:: footer */}
            <div className="footer">
                <Footer />
            </div>
            {/* end:: footer */}

            {/* begin:: floating icons */}
            <div className={`coco-floating-icons__wrapper ${overFlow}`}>
                <div className="coco-floating-icons__wrapper--icons">
                    <img src="/media/images/ic-fb-color.svg" alt="" />
                    <img src="/media/images/ic-youtube-color.svg" alt="" />
                    <img src="/media/images/ic-insta-color.svg" alt="" />
                    <img src="/media/images/ic-social-color.svg" alt="" />
                </div>
                <div className="coco-floating-icons__wrapper--scrolltop" >
                    <img src="/media/images/ic-btn-to-top.svg" alt="" />
                </div>
            </div>

            {/* begin:: chatBox */}
            <div className={`coco-chatbox__wrapper ${overFlow}`} >
                <div className="">
                    <span> Chat với chúng tôi</span>
                    <img src="/media/images/ic-arrowtop.svg" alt="" />
                </div>
                <img src="/media/images/ic-close.svg" alt="" />
            </div>
        </div>
    );
};
export default Wrapper;
