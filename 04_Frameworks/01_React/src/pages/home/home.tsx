import React, { useState } from "react";
import Card from "../../components/card";
import { cards } from '../../common/cards';
import './home.scss';

const Home: React.FC = () => {

    return (
        <div className="home">
            <div className="home-container">
                <h2 className="home-title"><span>¡Bienvenido!</span></h2>
                <p className="home-subtitle">Elige una API</p>
                <ul className="card-list">
                    {
                        cards.map((el, i) => {
                            return (
                                <Card
                                    id={el.id}
                                    key={i}
                                    name={el.name}
                                    title={el.title}
                                    subtitle={el.subtitle}
                                    cardImage={el.cardImage}
                                    cardContent={el.cardContent}
                                    cardActions={el.cardActions}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home