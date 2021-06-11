import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OurMenuData from './OurMenuData';
import OurMenuMap from './OurMenuMap';
import './OurMenu.css';
const categories = ['all',...new Set(OurMenuData.map((items) => items.category))];

const OurMenu = () => {
    const [ourMenuinfo,setOurMenuInfo] = useState(OurMenuData);
    const [category,setCategory] = useState(categories); 
    
    const handleClickCate = (data) => {
        console.log(data);
        if (data === 'all') {
            setOurMenuInfo(OurMenuData);
            return;
        }
        const newItems = OurMenuData.filter((item) => item.category === data);
        setOurMenuInfo(newItems);
    }

    return (
        <section id="our_Menu">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Our Menu</h1>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                        {
                            category.map((cate,index) =>
                            <button key={index} onClick={() =>handleClickCate(cate)} className="btn mx-1 mb-4 btn-outline-primary d-inline-block ml-2">{cate}</button>
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        ourMenuinfo.map((ourMenu) => <OurMenuMap key={ourMenu.id} {...ourMenu}></OurMenuMap>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurMenu;