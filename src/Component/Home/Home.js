import React from 'react';
import { Link } from 'react-router-dom';
import birthday from '../../images/birthday.png';

const Home = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h2>React 15 project</h2>
                    <hr />
                    {/* Birthday project done */}
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={birthday} alt="Card image cap" />
                            <div class="card-body">
                                <Link to='/birthday'><h5 class="card-title">Birthday Simple Project</h5></Link>
                                <Link to="/birthday" class="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;