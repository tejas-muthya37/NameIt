import React from 'react';
import './NameCard.css';

const nameCheapURL =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestedName }) => {
    return (
        <a
            target="_blank"
            className="card-link"
            href={`${nameCheapURL}${suggestedName}`}
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};

export default NameCard;
