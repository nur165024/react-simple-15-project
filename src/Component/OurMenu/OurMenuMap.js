import React from 'react';
import image from '../../images/image.jpg';

const OurMenuMap = (ourMenu) => {
    const {title,price,img,desc,category} = ourMenu;
    return (
        <div className="col-md-6">
            <div className="d-flex">
                <div className="mt-3">
                    <img width="100" src={img} alt="" />
                </div>
                <div className="menu__content">
                    <h4>{title}</h4>
                    <p>price : ${price}</p>
                    <p>category : <span className="text-danger">{category}</span></p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default OurMenuMap;