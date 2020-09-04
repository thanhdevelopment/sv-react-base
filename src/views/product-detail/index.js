import React, { useState, useEffect } from "react";
import BreadCrumb from "../../components/breadcum";
import Button from "../../components/buttons/button";
import SelectBox from "../../components/select-box";
import ItemCart from "../../components/items/item-cart";
import ItemProduct from "../../components/items/item-product";
import CardHeader from "../../components/cards/card-header";
import CardHorizontal from "../../components/cards/card-horizontal";

const ProductDetail = () => {
    const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    let [urlImage, setUrlImage] = useState("");
    let [tabActive, setTabActive] = useState(1);
    let [replyBox, setReplyBox] = useState("");
    useEffect(() => {

    }, []);
    return (
        <div className="product-detail-wrap">
            <BreadCrumb
                firstUrl="Son Môi"
                firstRouter="#"
                secondUrl="Son Kem Lì M.O.I S-Girls 07 Successful"
                secondRouter="#"
            />
            <div className="product-detail-body">
                <div className="product-detail-body--left">
                    <div className="tab-product-detail">
                        <div className="tab-product--left">
                            <div className="product-images-group">
                                <div className="product-images">
                                    <a>
                                        <img
                                            id="thumb-image"
                                            src="/media/images/Image 77.png"
                                            alt=""
                                            onClick={() => {
                                                setUrlImage(document.getElementById("thumb-image").src);
                                            }}
                                        />
                                    </a>
                                    <a>
                                        <img class="thumb-image" src="/media/images/thumnail-product2.png" alt="" />
                                    </a>
                                    <a>
                                        <img class="thumb-image" src="/media/images/thumnail-product2.png" alt="" />
                                    </a>
                                    <a>
                                        <img class="thumb-image" src="/media/images/thumnail-product2.png" alt="" />
                                    </a>
                                </div>
                                <div className="product-thumbnail">
                                    <img src={urlImage ? urlImage : "/media/images/thumnail-product1.png"} alt="" />
                                </div>
                            </div>
                            <div className="list-button-group">
                                <div className="share-buttons">
                                    <span>Chia sẻ:</span>
                                    <img src="/media/images/ic-messenger.svg" alt="" />
                                    <img src="/media/images/ic-share-facebook.svg" alt="" />
                                    <img src="/media/images/ic-share-google-plus.svg" alt="" />
                                    <img src="/media/images/ic-pinterest.svg" alt="" />
                                    <img src="/media/images/ic-twitter.svg" alt="" />
                                </div>
                                <div className="like-button">
                                    <img src="/media/images/ic-heart.svg" alt="" />
                                    <span>Đã thích (1,4k)</span>
                                </div>
                            </div>
                        </div>
                        <div className="tab-product--right">
                            <div className="product-brand">M.O.I</div>
                            <div className="product-name">Son Kem Lì M.O.I S-Girls 07 Successful Matte Liquid Lipstick by Hương Giang</div>
                            <div className="product-sub-info">
                                <div className="product-sub-info--item">
                                    <img src="/media/images/star.svg" alt="" />
                                    <img src="/media/images/star.svg" alt="" />
                                    <img src="/media/images/star.svg" alt="" />
                                    <img src="/media/images/star.svg" alt="" />
                                    <img src="/media/images/star.svg" alt="" />
                                    <span>150 đánh giá</span>
                                </div>
                                <div className="product-sub-info--item">5 Hỏi đáp</div>
                                <div className="product-sub-info--item">Mã sản phẩm: 383200006</div>
                            </div>
                            <div className="product-price">299,000 ₫</div>
                            <div className="product-gift">
                                <div className="product-gift--title">
                                    <img src="/media/images/ic-gift.svg" alt="" />
                                    <span>Quà tặng: Bông tẩy trang silicot 82 miếng (sl có hạn)</span>
                                </div>
                                <div className="product-gift--detail">
                                    <img src="/media/images/thumnail-product2.png" alt="" />
                                    <div className="product-gift_info">
                                        <span>Bông tẩy trang silicot 82 miếng</span>
                                        <span>Trị giá:
                                            <span> 29,000 ₫</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-type">
                                <a className="product-type--item">
                                    <img src="/media/images/thumnail-product2.png" alt="" />
                                </a>
                                <a className="product-type--item">
                                    <img src="/media/images/thumnail-product2.png" alt="" />
                                </a>
                                <a className="product-type--item">
                                    <img src="/media/images/thumnail-product2.png" alt="" />
                                </a>
                                <a className="product-type--item">
                                    <img src="/media/images/thumnail-product2.png" alt="" />
                                </a>
                                <a className="product-type--item">
                                    <img src="/media/images/thumnail-product2.png" alt="" />
                                </a>
                            </div>
                            <div className="product-quantity">
                                <span>Số lượng:</span>
                                <input type="number" name="product-quantity" />
                            </div>
                            <div className="product-delivery">
                                <img src="/media/images/ic-transpoter.svg" alt="" />
                                <span>
                                    HN: Bạn muốn nhận hàng trước
                                    <span> 20h </span>
                                     hôm nay. Đặt hàng trong
                                     <span> 49 phút </span>
                                     tới và chọn giao hàng
                                     <span> 2H </span>
                                     ở bước thanh toán. Xem chi tiết
                                </span>
                            </div>
                            <div className="product-buttons-group">
                                <Button
                                    icon="/media/images/ic-location.svg"
                                    text="9/9 chi nhánh còn sản phẩm"
                                    className="ccs-btn btn-location"
                                />
                                <Button
                                    icon="/media/images/Group 5178.svg"
                                    text="Giỏ hàng"
                                    className="ccs-btn btn-cart"
                                />
                                <Button
                                    icon="/media/images/ic-white-cart.svg"
                                    text="Mua ngay"
                                    subText="Nội thành Hà Nội giao hàng trong 2H"
                                    className="ccs-btn btn-order"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="tab-info-product-detail" id="tab-info-product-detail">
                        <div className="main-nav-tab">
                            <ul className="group-tabs">
                                <li className="tab-item">
                                    <a
                                        className={tabActive === 1 ? "tab-active" : "tab-inacitve"}
                                        onClick={() => {
                                            setTabActive(1)
                                        }}
                                        href="#tab-product-info"
                                    >
                                        Thông tin sản phẩm
                                    </a>
                                </li>
                                <li className="tab-item">
                                    <a
                                        className={tabActive === 2 ? "tab-active" : "tab-inacitve"}
                                        onClick={() => {
                                            setTabActive(2)
                                        }}
                                        href="#tab-product-guide"
                                    >
                                        Hướng dẫn sử dụng
                                    </a>
                                </li>
                                <li className="tab-item">
                                    <a
                                        className={tabActive === 3 ? "tab-active" : "tab-inacitve"}
                                        onClick={() => {
                                            setTabActive(3)
                                        }}
                                        href="#tab-product-feedback"
                                    >
                                        Đánh giá
                                    </a>
                                </li>
                                <li className="tab-item">
                                    <a
                                        className={tabActive === 4 ? "tab-active" : "tab-inacitve"}
                                        onClick={() => {
                                            setTabActive(4)
                                        }}
                                        href="#tab-product-question"
                                    >
                                        Hỏi đáp
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="tab-product-question" className={`tab tab-content--question ${tabActive !== 4 ? "content-inactive" : "content-acitve"}`} >
                                <div className="title-content">Hỏi đáp</div>
                                <div className="send-question-box">
                                    <input type="text" name="question" placeholder="Bạn có câu hỏi với sản phẩm này? Đặt câu hỏi ngay..." />
                                    <Button text="Gửi" className="ccs-btn ccs-btn-buy" />
                                </div>
                                <div className="item-question">
                                    <div className="item-parent">
                                        <div className="title-question">Long Supa - 14/05/2020</div>
                                        <div className="content-question">Dạ hiện tại e muốn Ship trong tối nay thì không biết có được ko shop</div>
                                        <div className="list-actions">
                                            <img src="/media/images/ic-btn-like.svg" alt="" />
                                            <a className="like-action">
                                                Thích
                                                <span>0</span>
                                            </a>
                                            <a className="reply-action">Trả lời</a>
                                        </div>
                                    </div>
                                    <div className="item-parent item-child">
                                        <div className="title-question">COCO SHOP - 14/05/2020</div>
                                        <div className="content-question">Chào bạn, bạn tham khảo dịch vụ giao hàng dưới 120 phút của Hasaki tại link này nha</div>
                                        <div className="list-actions">
                                            <img src="/media/images/ic-btn-like.svg" alt="" />
                                            <a className="like-action">
                                                Thích
                                            <span>0</span>
                                            </a>
                                            <a
                                                className="reply-action"
                                                onClick={() => { setReplyBox("active-box") }}
                                            >Trả lời</a>
                                        </div>
                                        {/* Reply box will appear when user click Tra Loi */}
                                        <div className={`reply-question-box ${replyBox}`}>
                                            <div>
                                                <textarea className="reply-textarea" name="reply" placeholder="Nội dung trả lời của bạn..."></textarea>
                                                <Button text="Gửi" className="ccs-btn ccs-btn-buy" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-parent">
                                        <div className="title-question">Long Supa - 14/05/2020</div>
                                        <div className="content-question">Dạ hiện tại e muốn Ship trong tối nay thì không biết có được ko shop</div>
                                        <div className="list-actions">
                                            <img src="/media/images/ic-btn-like.svg" alt="" />
                                            <a className="like-action">
                                                Thích
                                                <span>0</span>
                                            </a>
                                            <a className="reply-action">Trả lời</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-product-info" className={`tab tab-content--description ${tabActive === 4 ? "content-inactive" : "content-acitve"}`}>
                                <div className="title-content">Son Kem Lì M.O.I S-Girls Matte Liquid Lipstick by Hương Giang</div>
                                <div className="content-desciption">
                                    Sau những thành công nhất định với 3 dòng sản phẩm trước của thương hiệu M.O.I Cosmetics,
                                    đến đầu tháng 10/2019, “nữ hoàng giải trí” Hồ Ngọc Hà đã bắt tay cùng với ca sĩ – hoa hậu
                                    Hương Giang để hợp tác cho ra mắt dòng son kem lì mang tên “S-Girls by Hương Giang” mới toanh.
                                    Bộ sưu tập son lần này lấy cảm hứng từ thế hệ các cô gái trẻ hiện đại ngày nay, với tình yêu
                                    cái đẹp mãnh liệt, khả năng tự tin thể hiện phong cách của bản thân và luôn dẫn đầu các xu hướng.
                                </div>
                                <div className="poster-sm-description">
                                    <img src="/media/images/Image 74.png" alt="" />
                                    <img src="/media/images/Image 77.png" alt="" />
                                </div>
                                <div className="content-desciption">
                                    Xuyên suốt toàn bộ dòng son là những tông màu thời thượng với 3 tông màu hồng, cam, đất chủ đạo, phù hợp
                                    với tông da của người châu Á. Cả 7 màu son trong bộ sưu tập S-Girls đều được bắt đầu bằng chữ S và đại diện
                                    cho 7 cá tính khác nhau như: Smart (thông minh), Sweet (ngọt ngào), Sexy (gợi cảm), Strong (mạnh mẽ),
                                    Shining (tỏa sáng), Stylish (thời trang) và Successful (thành công).
                                </div>
                                <div className="poster-lg-description">
                                    <img src="/media/images/Image 79.png" alt="" />
                                </div>
                                <div className="content-desciption">
                                    Đặc biệt, dòng son mới sở hữu chất son kem mịn lì mà vẫn nhẹ tênh trên môi, không hề tạo cảm giác môi nặng dính
                                    khó chịu, đồng thời lên màu cực chuẩn chỉ sau 1 đường lướt nhẹ và cho khả năng bền màu lâu trôi vô cùng tốt, giúp
                                    bạn luôn tự tin với vẻ ngoài rạng rỡ & thu hút ánh nhìn.
                                </div>
                                <div className="poster-sm-description">
                                    <img src="/media/images/Image 80.png" alt="" />
                                    <img src="/media/images/Image 81.png" alt="" />
                                </div>
                                <div className="content-desciption">
                                    Hiện Son Kem Lì M.O.I S-Girls Matte Liquid Lipstick by Hương Giang đã có mặt tại Hasaki với các tông màu cho bạn
                                    lựa chọn như sau: No.1 – Smart (Hồng Tím Đất) Một cô gái thông minh sẽ luôn lựa chọn những gam màu mới lạ để giúp
                                    mình trở nên nổi bật giữa đám đông. Với sắc son Hồng ngọt ngào hòa quyện tự nhiên với sắc Tím Đất đầy cá tính đã
                                    tạo nên một màu son lạ lẫm nhưng vô cùng thu hút. Một cô nàng thông minh sẽ luôn tìm tòi sự khác biệt để tạo ra
                                    những sức hút riêng biệt. No.2 – Strong (Cam Da) Cam da luôn là ưu tiên hàng đầu của một cô gái để thể hiện sự
                                    mạnh mẽ, tràn đầy năng lượng và làm chủ với cuộc sống của mình. Sắc cam ấm pha trộn với tông màu da nồng nàn là
                                    nơi ẩn núp tuyệt vời của sự mạnh mẽ dưới một vẻ ngoài quyến rũ. Lưu ý: Theo thông tin mới nhất từ hãng, thỏi son
                                    kem lì No.2 - Strong của bộ sưu tập son kem lì S.Girls by Hương Giang đã được cải tiến màu vỏ bên ngoài để đúng
                                    với màu son bên trong. Trên thị trường hiện giờ sẽ có hai vỏ son khác nhau nhưng cùng 1 màu son bên trong của
                                    No.2 (giống hình bên dưới), nên vì vậy các bạn hãy yên tâm nhé, vì hai thỏi son khác màu vỏ này đều thuộc BST
                                    son kem lì của M.O.I Cosmetics. Ưu điểm nổi bật: Chất son mịn lì nhưng nhẹ tênh trên môi, tạo cảm giác dễ chịu
                                    khi dùng thường xuyên. Chứa dưỡng chất giúp cung cấp độ ẩm chuyên sâu, giúp môi mềm mượt. Bền màu, lâu trôi
                                    suốt nhiều giờ đồng hồ. Bộ sưu tập màu sắc thời trang, thích hợp cho nhiều phong cách makeup khác nhau.
                                    Chứa thành phần giúp ngăn ngừa lão hóa cho da môi. Bảo quản: Nơi khô ráo, thoáng mát. Tránh ánh nắng trực
                                    tiếp, nơi có nhiệt độ cao hoặc ẩm ướt. Đậy nắp kín sau khi sử dụng. Thương hiệu: M.O.I
                                </div>
                            </div>
                            <div className={`tab-content--attribute  ${tabActive === 4 ? "content-inactive" : "content-acitve"}`}>
                                <span>Để hiểu một cách rõ ràng hơn về thành phần và các công dụng từng sản phẩm hãy sử dụng tra cứu thành phần.</span>
                                <Button
                                    text="Tra cứu thành phần"
                                    className="ccs-btn btn-attribute"
                                />
                            </div>
                            <div id="tab-product-guide" className={`tab tab-content--guide ${tabActive === 4 ? "content-inactive" : "content-acitve"}`}>
                                <div className="title-content">Hướng dẫn sử dụng</div>
                                <div className="content-guide">
                                    Sau những thành công nhất định với 3 dòng sản phẩm trước của thương hiệu M.O.I Cosmetics,
                                    đến đầu tháng 10/2019, “nữ hoàng giải trí” Hồ Ngọc Hà đã bắt tay cùng với ca sĩ – hoa hậu
                                    Hương Giang để hợp tác cho ra mắt dòng son kem lì mang tên “S-Girls by Hương Giang” mới
                                    toanh. Bộ sưu tập son lần này lấy cảm hứng từ thế hệ các cô gái trẻ hiện đại ngày nay,
                                    với tình yêu cái đẹp mãnh liệt, khả năng tự tin thể hiện phong cách của bản thân và luôn
                                    dẫn đầu các xu hướng.
                                </div>
                            </div>
                            <div id="tab-product-feedback" className="tab tab-content--feedback">
                                <div className="title-content">Đánh giá</div>
                                <div className="subtitle-feedback">Khách hàng nhận xét</div>
                                <div className="rating-feedback">
                                    <div className="rating--box">
                                        <div className="rating--box_point">
                                            <span>Đánh giá trung bình</span>
                                            <span className="rating-total-point">5.0</span>
                                            <div>
                                                <img src="/media/images/star.svg" alt="" />
                                                <img src="/media/images/star.svg" alt="" />
                                                <img src="/media/images/star.svg" alt="" />
                                                <img src="/media/images/star.svg" alt="" />
                                                <img src="/media/images/star.svg" alt="" />
                                                <span>150 nhận xét</span>
                                            </div>
                                        </div>
                                        <div className="rating--box_process">
                                            <div className="process-line">
                                                <span>5 sao</span>
                                                <div className="countbar"></div>
                                                <div className="point">
                                                    <span>350</span>
                                                    <span>Rất hài lòng</span>
                                                </div>
                                            </div>
                                            <div className="process-line">
                                                <span>4 sao</span>
                                                <div className="countbar"></div>
                                                <div className="point">
                                                    <span>0</span>
                                                    <span>Hài lòng</span>
                                                </div>
                                            </div>
                                            <div className="process-line">
                                                <span>3 sao</span>
                                                <div className="countbar"></div>
                                                <div className="point">
                                                    <span>0</span>
                                                    <span>Bình thường</span>
                                                </div>
                                            </div>
                                            <div className="process-line">
                                                <span>2 sao</span>
                                                <div className="countbar"></div>
                                                <div className="point">
                                                    <span>0</span>
                                                    <span>Không hài lòng</span>
                                                </div>
                                            </div>
                                            <div className="process-line">
                                                <span>1 sao</span>
                                                <div className="countbar"></div>
                                                <div className="point">
                                                    <span>0</span>
                                                    <span>Rất tệ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="making-feedback">
                                        <span>Chia sẻ nhận xét của bạn về sản phẩm này</span>
                                        <Button
                                            text="Viết Bình Luận"
                                            className="ccs-btn ccs-btn-buy btn-feedback"
                                        />
                                    </div>
                                </div>
                                <div className="content-feedback">
                                    <div className="title-box-feedback">
                                        <span>150 bình luận cho sản phẩm này</span>
                                        <SelectBox className="ccs-selectbox selectbox-md" option="Ngày đánh giá" />
                                    </div>
                                    <div className="list-group-feedback">
                                        <div className="item-feedback">
                                            <div className="feedback-info">
                                                <div className="feedback-info--user">
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <span>Hoàng Linh</span>
                                                </div>
                                                <div className="feedback-info--timer">
                                                    09: 32 | 23/03/2020
                                                </div>
                                            </div>
                                            <div className="feedback-content">
                                                <div className="feedback-content--title">
                                                    <span>Son Kem Lì M.O.I S-Girls 06 Stylish</span>
                                                    <div>
                                                        <img src="/media/images/ic-shield.svg" alt="" />
                                                        Đã mua hàng online
                                                    </div>
                                                </div>
                                                <div className="feedback-content--comment">
                                                    đã mua màu 06 hợp với makeup cá tính. chất son ok. Sẽ ủng hộ shop dài dài...
                                                </div>
                                            </div>
                                            <div className="feedback-image">
                                                <div>
                                                    <img src="/media/images/Image 80.png" alt="" />
                                                </div>
                                                <div>
                                                    <img src="/media/images/Image 81.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-feedback">
                                            <div className="feedback-info">
                                                <div className="feedback-info--user">
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <img src="/media/images/star.svg" alt="" />
                                                    <span>Hoàng Linh</span>
                                                </div>
                                                <div className="feedback-info--timer">
                                                    09: 32 | 23/03/2020
                                                </div>
                                            </div>
                                            <div className="feedback-content">
                                                <div className="feedback-content--title">
                                                    <span>Son Kem Lì M.O.I S-Girls 06 Stylish</span>
                                                    <div>
                                                        <img src="/media/images/ic-shield.svg" alt="" />
                                                        Đã mua hàng online
                                                    </div>
                                                </div>
                                                <div className="feedback-content--comment">
                                                    đã mua màu 06 hợp với makeup cá tính. chất son ok. Sẽ ủng hộ shop dài dài...
                                                </div>
                                            </div>
                                            <div className="feedback-image">
                                                <div>
                                                    <img src="/media/images/Image 80.png" alt="" />
                                                </div>
                                                <div>
                                                    <img src="/media/images/Image 81.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-detail-body--right">
                    <div className="tab-delivery">
                        <CardHeader
                            type="custom"
                            className="common-card delivery-card"
                            titleHeader="MIỄN PHÍ VẬN CHUYỂN"
                            btnExternal="Xem thêm"
                        >
                            <div className="item-delivery">
                                <img src="/media/images/real-product.svg" alt="" />
                                <span>Phát hiện hàng giả, bạn trả hàng và nhận thêm
                                    <span> 110% </span>giá trị.
                                </span>
                            </div>
                            <div className="item-delivery">
                                <img src="/media/images/ship-cod.svg" alt="" />
                                <span>Thanh toán kiểm tra sản phẩm khi nhận hàng</span>
                            </div>
                            <div className="item-delivery">
                                <img src="/media/images/free-return.svg" alt="" />
                                <span>14 ngày đổi trả sản phẩm miễn phí</span>
                            </div>
                            <div className="item-delivery">
                                <img src="/media/images/now-free.svg" alt="" />
                                <span>
                                    Giao hàng
                                    <span> 2H miễn phí </span>
                                    nội thành Hà Nội.
                                </span>
                            </div>
                        </CardHeader>
                    </div>
                    <div className="tab-product-related">
                        <CardHeader
                            type="custom"
                            className="common-card product-related-card"
                            titleHeader="Sản phẩm cùng thương hiệu"
                            btnExternal="Xem thêm"
                        >
                            <div className="list-products-wrapper">
                                <ItemCart>
                                    <span>211.500 đ</span>
                                    <span>235.000 đ</span>
                                </ItemCart>
                                <ItemCart>
                                    <span>211.500 đ</span>
                                    <span>235.000 đ</span>
                                </ItemCart>
                                <ItemCart>
                                    <span>211.500 đ</span>
                                    <span>235.000 đ</span>
                                </ItemCart>
                            </div>
                        </CardHeader>
                    </div>
                    <div className="tab-product-trending">
                        <CardHeader
                            type="custom"
                            className="common-card product-trending-card"
                            titleHeader="Top Sản Phẩm Bán Chạy"
                        >
                            <div className="list-products-wrapper">
                                <ItemProduct
                                    hiddenLabel='none'
                                    hiddenDiscount='none'
                                    hiddenCountdown='none'
                                />
                                <ItemProduct
                                    hiddenLabel='none'
                                    hiddenDiscount='none'
                                    hiddenCountdown='none'
                                />
                                <ItemProduct
                                    hiddenLabel='none'
                                    hiddenDiscount='none'
                                    hiddenCountdown='none'
                                />
                            </div>
                        </CardHeader>
                    </div>
                </div>
            </div>
            <CardHorizontal
                data={arr2}
                marginTop="64px"
                titleHeader="SẢN PHẨM ĐÃ XEM"
                className="trangdiem-list-product-horizontal"
            />
        </div>
    );
};

export default ProductDetail;
