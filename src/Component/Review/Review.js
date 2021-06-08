import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>User Reivew</h1>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                    <hr />
                    <div className="col-md-8">
                        <p>user review</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;