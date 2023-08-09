import React, { useState } from "react";
import Card from "../../components/card";
import './home.scss';

const Home: React.FC = () => {

    const cards = [
        {
            id: '1',
            name: 'github',
            cardImage: 'GitHub' ,
            cardContent: [
                {text: 'Si eres un desbordao del código esta es tu sección.'},
                {text: 'Aquí podrás encontrar organizaciones de github y sus repositorios'}
            ],
            cardActions: {
                link: './list',
                text: 'Ver organizaciones de github'
            }
            
        },
        {
            id: '2',
            name: 'rick & morty',
            cardImage: 'RickMorty',
            cardContent: [
                {text: 'Si lo que te mola es los dibujines y ver la tele en el sofá...'},
                {text: 'No dudes en entrar a ver los personajes de Rick & Morty!'}
            ],
            cardActions: {
                link: './list',
                text: 'Ver personajes de Rick & Morty'
            }
            
        }
    ]

    return (
        <div className="home">
            <div className="card-container">
                <ul className="card-list">
                    {
                        cards.map((el, i) => {
                            return (
                                <Card
                                    id={el.id}
                                    key={el.id}
                                    name={el.name}
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