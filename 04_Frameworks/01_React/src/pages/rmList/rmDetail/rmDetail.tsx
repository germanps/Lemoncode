import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom"
import { IRMCharacterEntity } from '../../../models/RickMorty'
import './rmDetail.scss'
import { Button } from '@mui/material'

const rmDetail = (): React.JSX.Element => {

    const {state} = useLocation()

    return (
        <div className={`rm-detail ${state.character.status.toLowerCase()}`}>
            <div className='rm-container'>
                <h2 className="rm-container-title">
                    <span className='bg-title'>{state.character.name}</span>
                </h2>
                <div className='rm-detail-container'>
                    <div className='rm-image-wrapper'>
                        <img className='image' src={state.character.image} alt={state.character.name} />
                    </div>
                    <div className='rm-data-wrapper'>
                        <div className='rm-data'>
                            <ul className='rm-data-list'>
                                <li className='rm-data-list__item'>
                                    <span className='bullet'></span>
                                    <span>{state.character.status}</span>
                                </li>
                                <li className='rm-data-list__item'>
                                    <span className='label'>Especie: </span>
                                    <span>{state.character.species}</span>
                                </li>
                                <li className='rm-data-list__item'>
                                    <span className='label'>Género: </span>
                                    <span>{state.character.gender}</span>
                                </li>
                                <li className='rm-data-list__item'>
                                    <span className='label'>Lugar: </span>
                                    <span>{state.character.location.name}</span>
                                </li>
                                <li className='rm-data-list__navigate'>
                                    <Link to={'/rickmortylist'}>
                                        <Button variant='contained' color='info' size="small">Volver al listado</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default rmDetail