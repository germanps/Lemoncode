import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar/Avatar'
import InfoIcon from '@mui/icons-material/Info'
import IconButton from '@mui/material/IconButton/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { CharacterEntityVm } from '../character-collection.vm'
import * as classes from './character-card.styles'

interface Props {
  character: CharacterEntityVm
  onDetail: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}
const auxiliarImagePath: string = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail, onEdit, onDelete } = props

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.status}</Avatar>}
        title={character.name}
        subheader={character.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={(character.image === "") ? auxiliarImagePath : character.image}
            title={character.name}
            style={{ height: '400px' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.species}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Best sentences: {character.bestSentences}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <InfoIcon />
        </IconButton>
        {/* <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton> */}
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
