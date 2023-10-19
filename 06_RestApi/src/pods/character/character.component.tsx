import React from 'react'
import { Character } from './character.vm'
import { STATUS } from '../../common/models'
import * as classes from './character.styles'

interface Props {
  character: Character
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <section className={classes.container}>
      <div className={classes.imgWrapper}>
        <img className={classes.image} alt='character-image' src={character.image} />
      </div>
      <div className={classes.infoWrapper}>
        <h2 className={classes.title}>{character.name}</h2>
        <div className={classes.status}>
          <span style={{ backgroundColor: STATUS[character.status] }} className={classes.icon} />
          <span className={classes.colorTitle}>{character.status}</span>
        </div>
        <div className={classes.wrapper}>
          <span className={classes.colorTitle}>Gender:</span>
          <span className={classes.colorText}>{character.gender}</span>
        </div>
        <div className={classes.wrapper}>
          <span className={classes.colorTitle}>Species:</span>
          <span className={classes.colorText}>{character.species}</span>
        </div>
        {character.type !== "" ? (
          <div className={classes.wrapper}>
            <span className={classes.colorTitle}>Type:</span>
            <span className={classes.colorText}>{character.type}</span>
          </div>
        ) : null}
        <div className={classes.wrapper}>
          <span className={classes.colorTitle}>Last known location:</span>
          <span className={classes.colorText}>{character.location.name}</span>
        </div>
        <div className={classes.wrapper}>
          <span className={classes.colorTitle}>First seen in:</span>
          <span className={classes.colorText}>{character.origin.name}</span>
        </div>
      </div>
    </section>
  )
}
