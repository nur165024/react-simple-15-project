import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcNext } from "react-icons/fc";
import './Expierence.css';

const Expierence = () => {
    const [expierence,setExpierence] = useState([]);
    const [value,setValue] = useState(0);

    const fetchExpierence = async () => {
        const response = await fetch('https://course-api.com/react-tabs-project');
        const data = await response.json();
        setExpierence(data);
    }

    useEffect(() => {
        fetchExpierence()
    },[]);
    
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Expierence</h1>
                        <h5 className="my-3">Total Tours : {expierence.length}</h5>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-2">
                        <ul className="nav flex-column">
                            {
                                expierence.map((data,index) =>
                                    <li key={index} className="nav-item">
                                        <a onClick={() => setValue(index)} className={`nav-link ${index === value ? 'text-secondary' : '' }`} href="#">{data.company}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="col-md-10">
                        <div className="content_data">
                            <h4>{expierence[value]?.title}</h4>
                            <h3 className="bg-secondary my-3 text-light d-inline-block p-2">{expierence[value]?.company}</h3>
                            <p>{expierence[value]?.dates}</p>
                            <div className="short_content my-3">
                                {
                                    expierence[value]?.duties.map((duti,index) => 
                                        <p key={index} className="my-3"><FcNext /><FcNext />{duti}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expierence;