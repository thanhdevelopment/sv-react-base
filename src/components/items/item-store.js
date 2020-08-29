import React, { Component } from "react";
class ItemStore extends Component {
    render() {
        return (
            <div className="ccs-item-store">
                <div className="ccs-item-store--img">
                    <img src="/media/images/coco-store.png" alt="" />
                </div>
                <div className="ccs-item-store--text">
                    <span>258 Bà Triệu, Hà Nội</span>
                    <span>0988888948</span>
                </div>
            </div>
        );
    }
};

export default ItemStore;
