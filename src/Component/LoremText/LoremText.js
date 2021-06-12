import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import textData from './Data';

const LoremText = () => {
    const [index,setIndex] = useState(0);
    const [loremText,setLoremText] = useState([]);
    
    const handleClick = (e) => {
        e.preventDefault();
        let number = parseInt(index);
        if (index < 0) {
            number = 1;
        }
        if (index === 8) {
            number = 8;
        }
        setLoremText(textData.slice(0,number));
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Lorem Text Count</h1>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                </div>3
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h3>Text Count Number</h3>
                        <label className="my-4">Paragraphs:</label>
                        <input type="number" value={index} onChange={(e) => setIndex(e.target.value)} />
                        <button onClick={handleClick} className="btn btn-success">Generate</button>
                        {
                            loremText.map((items,index)=> <p key={index}>{items}</p>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoremText;