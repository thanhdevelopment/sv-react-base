import React from "react";

const Pagniation = () => {
    return (
        <div className="coco-paginate-wrap">
            <div className="coco-paginate-item">
                <img
                    src="/media/images/sort-next.svg"
                    className="paginate-item--transform"
                    alt=""
                />
                <img
                    src="/media/images/sort-down.svg"
                    className="paginate-item--transform"
                    alt=""
                />
                <div className="paginate-item--child">
                    <button>
                        <span>1</span>
                    </button>
                    <button>
                        <span>2</span>
                    </button>
                    <button>
                        <span>3</span>
                    </button>
                    <button>
                        <span>4</span>
                    </button>
                    <button>
                        <span>5</span>
                    </button>
                </div>
                <img src="/media/images/sort-down.svg" alt="" />
                <img src="/media/images/sort-next.svg" alt="" />
            </div>
        </div>
    );
}

export default Pagniation;