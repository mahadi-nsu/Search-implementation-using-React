import React from 'react';
import './CardList.style.css';

import Card from '../Card/Card.component';

export default function CardList(props) {
    console.log(props);
    return (
        <div className="card-list">
            {
                props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))
            }
        </div>
    )
}
