import React from 'react';
import './Patterns.css';
import info from "./../const_data/info.json";
import ImagePattern from "./ImagePattern";

const patterns = info.patterns;

export const Patterns: React.FunctionComponent = () => (
    <div className="patterns-wrapper">
        <h1>
            Шаблоны для распознавания
        </h1>
        <div className="patterns">
            {patterns.map(pattern => (<ImagePattern Values={pattern}/>))}
        </div>
    </div>
);

export default Patterns;