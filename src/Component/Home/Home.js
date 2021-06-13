import React from 'react';
import { Link } from 'react-router-dom';
import birthday from '../../images/birthday.png';
import tours from '../../images/tours.png';
import question from '../../images/question.png';
import ourMenu from '../../images/ourMenu.png';
import expreience from '../../images/expreience.png';
import lorem_text from '../../images/lorem_text.png';
import form_submit from '../../images/form_submit.png';
import sideBar_nav from '../../images/sidebarNav.jpg';

const Home = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <h2 className="my-3">React 15 project</h2>
                    <hr />
                    {/* Birthday project done */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={birthday} alt="" />
                            <div className="card-body">
                                <Link to='/birthday'><h5 className="card-title mb-4">Birthday Simple Project</h5></Link>
                                <Link to="/birthday" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={tours} alt="" />
                            <div className="card-body">
                                <Link to='/tours'><h5 className="card-title mb-4">Tours Project</h5></Link>
                                <Link to="/tours" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={tours} alt="" />
                            <div className="card-body">
                                <Link to='/review'><h5 className="card-title mb-4">User Review</h5></Link>
                                <Link to="/review" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={question} alt="" />
                            <div className="card-body">
                                <Link to='/questions/answers'><h5 className="card-title mb-4">Questions ans Answers(FAQ)</h5></Link>
                                <Link to="/questions/answers" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={ourMenu} alt="" />
                            <div className="card-body">
                                <Link to='/our/menu'><h5 className="card-title mb-4">Our Menu</h5></Link>
                                <Link to="/our/menu" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={expreience} alt="" />
                            <div className="card-body">
                                <Link to='/expreience'><h5 className="card-title mb-4">expreience</h5></Link>
                                <Link to="/expreience" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={lorem_text} alt="" />
                            <div className="card-body">
                                <Link to='/lorem/text/count'><h5 className="card-title mb-4">Lorem Text</h5></Link>
                                <Link to="/lorem/text/count" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={form_submit} alt="" />
                            <div className="card-body">
                                <Link to='/form/submit'><h5 className="card-title mb-4">Form Submit</h5></Link>
                                <Link to="/form/submit" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" height="220" src={sideBar_nav} alt="" />
                            <div className="card-body">
                                <Link to='/sideBar/nav'><h5 className="card-title mb-4">SideBar Nav</h5></Link>
                                <Link to="/sideBar/nav" className="btn btn-primary">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;