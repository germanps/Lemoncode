import React, { useEffect, useState } from 'react'
import * as api from './api'
import { useParams, useNavigate } from 'react-router-dom'
import { createEmptyCharacter, Character } from './character.vm'
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers'
import { CharacterComponent } from './character.component'

export const CharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [character, setCharacter] = useState<Character>(createEmptyCharacter())

  useEffect(() => {
    if (id) loadCharacter()
  }, [])

  const loadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id)
    setCharacter(mapCharacterFromApiToVm(apiCharacter))
  }

  const handleCharacterChange = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character)
    const success = await api.saveCharacter(apiCharacter)
    if (success) navigate(-1)
    else alert('Save character error')
  }

  return (
    <CharacterComponent character={character} onSave={handleCharacterChange} />
  )
}
