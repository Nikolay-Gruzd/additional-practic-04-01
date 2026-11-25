import axios from 'axios'
import { DecksApiRes } from './decks-api.types'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<DecksApiRes>('/v2/decks')
  }
}