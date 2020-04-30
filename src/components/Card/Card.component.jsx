import React from 'react';
import './Card.style.css';

export default function Card(props) {
    return (
        <div className="card-container">

            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h6>
                Name : {props.monster.name}
            </h6>
                email : {props.monster.email}

        </div>
    )
}
