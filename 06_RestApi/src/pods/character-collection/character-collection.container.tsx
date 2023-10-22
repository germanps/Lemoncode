import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { linkRoutes } from 'core/router'
import { useCharacterCollection } from './character-collection.hook'
import { CharacterCollectionComponent } from './character-collection.component'

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection()
  const navigate = useNavigate()

  useEffect(() => {
    loadCharacterCollection()
  }, [])

  const handleEditCharacter = (id: string) => {
    navigate(linkRoutes.editCharacter(id))
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEditCharacter}
    />
  )
}
