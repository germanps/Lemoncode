import React from 'react'
import { Link } from "react-router-dom";
import {Avatar, CardHeader, CardMedia, Card as MUICard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import GitHub from '../../assets/GitHub.jpg';
import RickMorty from '../../assets/RickMorty.jpg';

export const allImages = {
    GitHub, 
    RickMorty,    
};

interface ICardContent {
    text: string
}
interface ICardAction {
    link: string
    text: string
}

interface ICard {
    id: string
    name: string
    cardImage: string 
    cardContent: ICardContent[]
    cardActions: ICardAction
}

const Card = ({
    id,
    name,
    cardImage,
    cardContent,
    cardActions,
}: ICard) => {
  return (
    <li className="card-list-item">
        <MUICard id={id} sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={allImages[cardImage]}
                alt={`imagen ${name}`}
            />
            <CardContent>
                {cardContent.map((el:ICardContent, i) => {
                    return (
                        <p key={i} className='card-content-text'>{el.text}</p>
                    )
                })}
            </CardContent>
            <CardActions>
                <Link to={cardActions.link}>
                    <Button size="small">{cardActions.text}</Button>
                </Link>
            </CardActions>
        </MUICard>
    </li>
  )
}

export default Card