import React from 'react';
import '../App.css';
import '../Portfolio.css';

function Projects(props) {
    return (
        <div className={`grid-item gallery__item--${props.id}`}>
            <img src={props.image} alt={props.name}
                 className="project_img"/>
            <div className="project_description">
                <h5>{props.name}</h5>
            </div>
        </div>
    );
}
export default Projects;