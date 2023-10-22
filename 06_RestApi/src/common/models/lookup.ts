export interface Lookup {
  id: string
  name: string
  status: string
  species: string
  image: string
}

export const createEmptyLookup = (): Lookup => ({
  id: '',
  name: '',
  status: '',
  species: '',
  image: '',
})

export const STATUS = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'gray',
}
