import React, { useState } from 'react';

const Tour = ({id,name,image,price,info,noInterestedClick}) => {
    const [readMore,setReadMore] = useState(false)

    const readingHandleClick = () => {
        setReadMore(!readMore)
    }    

    return (
        <div className="col-md-4 mb-4">
            <div className="card border-success">
                <img style={{ width:'100%', height: '230px' }} className="card-img-top" src={image} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="text-success">${price}</h6>
                    <p className="card-text">
                        {readMore ? info : `${info.substring(0,200)}...`}
                        <button className="btn btn-link" onClick={readingHandleClick}>
                            { readMore ? 'Less More' : 'Read More' }
                        </button>
                    </p>
                    <button className="btn btn-success" onClick={() => noInterestedClick(id)}>No interested</button>
                </div>
            </div>
        </div>
    );
};

export default Tour;