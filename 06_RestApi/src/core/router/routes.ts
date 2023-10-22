import { generatePath } from 'react-router';

type NavigationFunction = (id: string) => string

interface SwitchRoutes {
  root: string
  characterCollection: string
  character: string
  editCharacter: string
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/rickmorty',
  character: '/rickmorty/:id',
  editCharacter: '/rickmorty/:id',
}

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }) ,
}
