import React from 'react';
import { Link } from 'react-router-dom';
import birthday from '../../images/birthday.png';
import tours from '../../images/tours.png';
import ourMenu from '../../images/ourMenu.png';

const Home = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h2>React 15 project</h2>
                    <hr />
                    {/* Birthday project done */}
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={birthday} alt="" />
                            <div className="card-body">
                                <Link to='/birthday'><h5 className="card-title">Birthday Simple Project</h5></Link>
                                <Link to="/birthday" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={tours} alt="" />
                            <div className="card-body">
                                <Link to='/tours'><h5 className="card-title">Tours Project</h5></Link>
                                <Link to="/tours" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={tours} alt="" />
                            <div className="card-body">
                                <Link to='/review'><h5 className="card-title">User Review</h5></Link>
                                <Link to="/review" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={tours} alt="" />
                            <div className="card-body">
                                <Link to='/questions/answers'><h5 className="card-title">Questions ans Answers(FAQ)</h5></Link>
                                <Link to="/questions/answers" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={ourMenu} alt="" />
                            <div className="card-body">
                                <Link to='/our/menu'><h5 className="card-title">Our Menu</h5></Link>
                                <Link to="/our/menu" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;