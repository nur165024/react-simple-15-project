import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reviewData from './ReviewData';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const Review = () => {
    const[index,setIndex] = useState(0);
    const {name,job,image,text} = reviewData[index];

    const checkNumber = (number) => {
        if (number > reviewData.length - 1) {
          return 0;
        }
        if (number < 0) {
          return reviewData.length - 1;
        }
        return number;
    };

    const leftHandleClick = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            console.log(newIndex);
            return checkNumber(newIndex);
        })
    }

    const rightHandleClick = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            console.log(newIndex);
            return checkNumber(newIndex);
        })
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>User Reivew</h1>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div class="card text-center">
                            <div class="card-body">
                                <img style={{ width:'auto',height:'100px',borderRadius:'10%' }} src={image} alt="" />
                                <h5 class="card-title mt-3">{name}</h5>
                                <h6 className="text-primary">{job}</h6>
                                <p class="card-text">{text}</p>
                                <p>
                                    <button onClick={leftHandleClick} className="btn btn-link"><FaAngleLeft></FaAngleLeft></button>
                                    <button onClick={rightHandleClick} className="btn btn-link"><FaAngleRight></FaAngleRight></button>
                                </p>
                                <Link href="#" class="btn btn-primary">Suprise Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;