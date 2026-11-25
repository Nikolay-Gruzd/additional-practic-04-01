export type DecksApiRes = {
  items: [
    {
      isFavorite: boolean
      author: {
        id: string
        name: string
      }
      id: string
      userId: string
      name: string
      isPrivate: boolean
      cover: string
      created: string
      updated: string
      cardsCount: number
    },
  ]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
}