import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuestionsAndAnswers.css';
import data from './QuestionsAndAnswersData';
import QuestionsMap from './QuestionsMap';

const QuestionsAndAnswers = () => {
    const [questions,setQuestions] = useState(data);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Questions and Answers</h1>
                        <Link className="btn btn-success mb-3" to="/">Back</Link>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center">
                    {
                        questions.map((question) => <QuestionsMap key={question.id} question={question}></QuestionsMap>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default QuestionsAndAnswers;