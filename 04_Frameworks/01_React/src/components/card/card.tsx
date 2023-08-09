import React from 'react'
import { Link } from "react-router-dom";
import {Avatar, CardHeader, CardMedia, Card as MUICard} from '@mui/material';
import { extractCapitalLetters } from '../../common/helpers';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import GitHub from '../../assets/GitHub.jpg';
import RickMorty from '../../assets/RickMorty.jpg';
import './card.scss';

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
    title: string
    subtitle: string
    name: string
    cardImage: string 
    cardContent: ICardContent[]
    cardActions: ICardAction
}

const Card = ({
    id,
    name,
    title,
    subtitle,
    cardImage,
    cardContent,
    cardActions,
}: ICard): React.JSX.Element => {
    
  return (
    <li className="card-list-item">
        <MUICard id={id} sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        {extractCapitalLetters(cardImage)}
                    </Avatar>
                }
                title={title}
                subheader={subtitle}
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
                    <Button variant='contained' color='info' size="small">{cardActions.text}</Button>
                </Link>
            </CardActions>
        </MUICard>
    </li>
  )
}

export default Card