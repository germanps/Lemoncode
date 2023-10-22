import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { CharacterEntityVm } from '../character-collection.vm'
import * as classes from './character-card.styles'

interface Props {
  character: CharacterEntityVm
  onEdit: (id: string) => void
}

export const CharacterCard: React.FunctionComponent<Props> = ({ character, onEdit }: Props) => {

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <img
            src={character.picture}
            title={character.name}
            style={{ height: '350px' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.status}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
