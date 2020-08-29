import React, { Component } from "react";
class ItemArticle extends Component {
    render() {
        return (
            <div className="ccs-item-article">
                <div className="ccs-item-article--background">
                    <div>
                        <div className="ccs-item-article--background__title">
                            Bộ sản phẩm AVÈNE cho mùa hè năng động
                    </div>
                        <div className="ccs-item-article--background__description">
                            Avène là dòng Dược Mỹ Phẩm của Pháp với lịch sử phát triển
                            gần 300 năm, đã được các bác sĩ da liễu trên toàn thế giới
                            xác nhận...
                    </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ItemArticle;
