import React from 'react';
import './Results.css';
import NameCard from './../NameCard/NameCard';

const Results = ({ suggestedNames }) => {
    const suggestedJSX = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedJSX}</div>;
};

export default Results;
