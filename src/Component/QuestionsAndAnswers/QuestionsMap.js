import React, { useState } from 'react';
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";

const QuestionsMap = ({question}) => {
    const {title,info} = question;
    const [showInfo,setShowInfo] = useState(false);

    return (
        <div className="col-md-8">
            <div className="card">
                <div className="card-body d-flex">
                    <div>
                        <h6>{title}</h6>
                    </div>
                    <div className="btn__button">
                        <button onClick={() => setShowInfo(!showInfo)} className="btn">
                            {!showInfo ? <GoDiffAdded /> : <GoDiffRemoved />}
                        </button>
                    </div>
                </div>
                {
                    showInfo && <p style={{ padding:'10px 30px' }}>{info}</p>
                }
            </div>
        </div>
    );
};

export default QuestionsMap;