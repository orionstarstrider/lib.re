export const getFocusedBookData = state => {
    const { bookId=-1 } = state.app.modalData

    if (bookId === -1) return {}

    const targetBook = state.books.books.filter(book => book.id === bookId)

    return targetBook.length >= 1 ? targetBook[0] : {}
}