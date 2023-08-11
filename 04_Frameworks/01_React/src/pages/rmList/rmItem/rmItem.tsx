import React from 'react'
import { IRMCharacterEntity } from '../../../models/RickMorty'

interface ICharacter {
    item: IRMCharacterEntity
}

const RmItem = ({
    item
}: ICharacter): React.JSX.Element => {
    
    const [character, setCharacter] = React.useState<IRMCharacterEntity>(item)

    React.useEffect(() => {
        setCharacter(item)
    }, [item])
    

    return (
        <li className='rm-item'>
            <span>{character.name}</span>
        </li>
    )
}

export default RmItem