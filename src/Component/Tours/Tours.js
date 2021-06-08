import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import birthday from '../../images/birthday.png';
import Tour from './Tour';

const Tours = () => {
    const [tours,setTours] = useState([]);
    
    const url = 'https://course-api.com/react-tours-project';

    const fetchTours = async () => {
        const response = await fetch(url);
        const toursdata = await response.json();
        setTours(toursdata);
    }

    useEffect(() => {
        fetchTours()
    },[])

    const noInterestedClick = (id) => {
        const found = tours.filter(tour => tour.id !== id);
        setTours(found);
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Ours Tours List</h1>
                        <h5>Total Tours : {tours.length}</h5>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                    <hr />
                    {
                        tours.map((tour) => <Tour key={tour.id} noInterestedClick={noInterestedClick} {...tour}></Tour>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Tours;