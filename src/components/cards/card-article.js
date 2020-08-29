import React, { Component } from "react";
import ItemArticle from "../items/item-article";
import CardHeader from "./card-header";

class CardArticle extends Component {
    render() {
        const {
            data,
            titleHeader,
            className,
            displayTimeBox,
            borderBottom,
            marginTop,
            btnExternal
        } = this.props;
        return (
            <div
                className={`ccs-card card-article ${className}`}
                style={{ marginTop: marginTop }}
            >
                <CardHeader
                    type="header"
                    titleHeader={titleHeader}
                    displayTimeBox={displayTimeBox}
                    borderBottom={borderBottom}
                    btnExternal={btnExternal}
                />
                <div className="ccs-card-content">
                    {data.map((item, index) => {
                        return (
                            <ItemArticle />
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default CardArticle;
