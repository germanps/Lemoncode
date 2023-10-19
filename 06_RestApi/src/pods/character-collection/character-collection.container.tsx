import * as React from 'react'
import { useCharacterCollection } from './character-collection.hook'
import { CharacterCollectionComponent } from './character-collection.component'
import { linkRoutes } from 'core/router'
import { useNavigate } from 'react-router-dom'
import { deleteCharacter } from './api'

export const CharacterCollectionContainer = () => {
  const navigate = useNavigate()
  const { characterCollection, loadCharacterCollection } = useCharacterCollection()

  React.useEffect(() => {
    loadCharacterCollection()
  }, [])

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter)
  }

  const handleCharacterDetail = (id: string) => {
    navigate(linkRoutes.characterDetail(id))
  }

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id))
  }

  const handleDelete = async (id: string) => {
    await deleteCharacter(id)
    loadCharacterCollection()
    console.log(id)

  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onDetail={handleCharacterDetail}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}
