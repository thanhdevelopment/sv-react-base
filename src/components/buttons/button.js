import React, { Component } from "react";
import { Link } from "react-router-dom";
class Button extends Component {
    render() {
        const { text, subText, type, icon, TextLink, className, onClick } = this.props;
        return (
            <div className={`ccs-button-cpn ${className}`}>
                <button className="ccs-button-wrap" type={type} onClick={onClick}>
                    <Link className="ccs-button-link" to={TextLink}>
                        {icon ? <img src={icon} alt="" /> : ""}
                        <span className="title-button">
                            {text}
                            <span>{subText}</span>
                        </span>
                    </Link>
                </button>
            </div>
        );
    }
}

export default Button;