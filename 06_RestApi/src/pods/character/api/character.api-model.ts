export interface Character {
  id: string
  name: string
  gender: string
  status: string
  species: string
  type: string
  image: string
  origin: {
    name: string
    url: string
  },
  location: {
    name: string
    url: string
  },
  episode: string[]
  url: string
  bestSentences: string
  created: string
}
