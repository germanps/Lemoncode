
export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}
export interface Character {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  bestSentences: string
  origin: Origin
  image: string
  location: Location
  episode: string[]
  url: string
  created: string
}
