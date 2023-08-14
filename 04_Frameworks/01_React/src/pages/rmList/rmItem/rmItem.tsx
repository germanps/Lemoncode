import React from 'react'
import { Link } from 'react-router-dom';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { IRMCharacterEntity } from '../../../models/RickMorty'
import './rmItem.scss'

interface ICharacter {
    item: IRMCharacterEntity,
}


const RmItem = ({
    item
}: ICharacter): React.JSX.Element => {

    const [character, setCharacter] = React.useState<IRMCharacterEntity>(item)

    React.useEffect(() => {
        setCharacter(item)
    }, [item])

    const getStateIcon = () => {
        switch (item.status) {
            case 'Alive':
                return <span className='flex-container'>
                            <SmartToyOutlinedIcon />
                            <span className='ghost-label'>{item.status}</span>
                        </span>
            
            case 'Dead':
                return <span className='flex-container'>
                            <WhatshotIcon />
                            <span className='ghost-label'>{item.status}</span>
                        </span>
                 
        
            case 'unknown':
                return <span className='flex-container'>
                            <ContactSupportOutlinedIcon />
                            <span className='ghost-label'>{item.status}</span>
                       </span>
        
            default:
                break;
        }
    }

    const backgroundStyle = () => ({
        backgroundImage: 
            `linear-gradient(
                rgba(0,0,0,0.8),
                rgba(0,0,0,0.2)), 
                url(${item.image}
            )`,
        '&:hover': {
            transform: 
                `rotate(${Math.floor(Math.random() * (1000 - 100) + 100) / 100})`
        }
    })

    return (
        <li className='rm-grid-list__item'>
            <Link 
                className='card-link' 
                style={backgroundStyle()}
                to={`/rickmorty/character/${item.name}`}
                state={{character: item}}
            >
                <h3>{character.name}</h3>
                <div className='icon-wrapper'>
                    {getStateIcon()} 
                </div> 
            
            </Link>
        </li>
    )
}

export default RmItem