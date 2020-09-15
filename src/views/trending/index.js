import React from 'react';

const Trending = () => {
    return (
        <div className="ccs-trending-wrapper">
            <div className="list-articles">
                <div className="article-item item-lg">
                    <img src="/media/images/.svg" alt="" />
                    <div className="article-item--title">Tra cứu thành phần</div>
                    <div className="article-item--datetime">26/05/2020 10:33:54 AM</div>
                    <div className="article-item--description">Nhập tên từng chất bạn muốn tra,
                    mỗi chất sẽ được highlight khác nhau, để phân cách các chất, bạn có
                    thể nhập các ký tự ;|_. Các ký tự này sẽ không xuất hiện trên màn hình...</div>
                </div>
                <div className="article-item item-lg">
                    <img src="/media/images/.svg" alt="" />
                    <div className="article-item--title">Xịt khoáng - Cho da khô thoáng cả mùa hè nóng bức</div>
                    <div className="article-item--datetime">26/05/2020 10:33:54 AM</div>
                    <div className="article-item--description">Bên cạnh kem chống nắng, các nàng hãy nhớ luôn
                    bỏ túi 1 chai xịt khoáng trong những ngày hè nóng bức nha vì đây chính là "cứu tinh"
                    cho làn da mất nước hay bị cháy nắng vào mùa hè...</div>
                </div>
            </div>
            <div className="list-articles">
                <div className="article-item item-sm">
                    <img src="/media/images/.svg" alt="" />
                    <div className="article-item--title">Tra cứu thành phần</div>
                    <div className="article-item--datetime">26/05/2020 10:33:54 AM</div>
                    <div className="article-item--description">Nhập tên từng chất bạn muốn tra,
                    mỗi chất sẽ được highlight khác nhau, để phân cách các chất, bạn có
                    thể nhập các ký tự ;|_. Các ký tự này sẽ không xuất hiện trên màn hình...</div>
                </div>
                <div className="article-item item-sm">
                    <img src="/media/images/.svg" alt="" />
                    <div className="article-item--title">Xịt khoáng - Cho da khô thoáng cả mùa hè nóng bức</div>
                    <div className="article-item--datetime">26/05/2020 10:33:54 AM</div>
                    <div className="article-item--description">Bên cạnh kem chống nắng, các nàng hãy nhớ luôn
                    bỏ túi 1 chai xịt khoáng trong những ngày hè nóng bức nha vì đây chính là "cứu tinh"
                    cho làn da mất nước hay bị cháy nắng vào mùa hè...</div>
                </div>
                <div className="article-item item-sm">
                    <img src="/media/images/.svg" alt="" />
                    <div className="article-item--title">Xịt khoáng - Cho da khô thoáng cả mùa hè nóng bức</div>
                    <div className="article-item--datetime">26/05/2020 10:33:54 AM</div>
                    <div className="article-item--description">Bên cạnh kem chống nắng, các nàng hãy nhớ luôn
                    bỏ túi 1 chai xịt khoáng trong những ngày hè nóng bức nha vì đây chính là "cứu tinh"
                    cho làn da mất nước hay bị cháy nắng vào mùa hè...</div>
                </div>
                <div className="article-item item-sm">
                    <img src="/media/images/.svg" alt="" />
                    <div className="article-item--title">Xịt khoáng - Cho da khô thoáng cả mùa hè nóng bức</div>
                    <div className="article-item--datetime">26/05/2020 10:33:54 AM</div>
                    <div className="article-item--description">Bên cạnh kem chống nắng, các nàng hãy nhớ luôn
                    bỏ túi 1 chai xịt khoáng trong những ngày hè nóng bức nha vì đây chính là "cứu tinh"
                    cho làn da mất nước hay bị cháy nắng vào mùa hè...</div>
                </div>
            </div>
            <div className="list-type-articles">
                <span>Xem thêm theo chuyên mục</span>
                <div className="list-buttons">
                    {/* list buttons */}
                </div>
            </div>
            <div className="list-videos">
                <span>Video chia sẻ</span>
                <div className="list-videos--left">
                    <div className="video-item">
                        <div className="video-thumbnail"></div>
                        <div className="video-title"></div>
                        <div className="video-description"></div>
                    </div>
                </div>
                <div className="list-videos--right">
                    <div className="video-item">
                        <div className="video-thumbnail"></div>
                        <div className="video-title"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;
