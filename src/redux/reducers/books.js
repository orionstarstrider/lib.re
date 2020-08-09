import {
    LOAD_BOOKS,
    BOOKS_LOADED,
    ADD_BOOK,
    MODIFY_BOOK,
    REMOVE_BOOK
} from '../actions/books'


const initialState = {
    booksLoading: false,
    error: '',
    books: []
}

const books = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_BOOKS: {
            return {
                ...state,
                booksLoading: true,
                error: 'ERROR'
            }
        }

        case BOOKS_LOADED: {
            const { books } = action

            return {
                ...state,
                booksLoading: false,
                error: '',
                books
            }
        }

        case ADD_BOOK: {
            const { book: bookToAdd } = action
            const { books: restBooks } = state

            return {
                ...state,
                books: [
                    ...restBooks,
                    bookToAdd
                ]
            }
        }

        case MODIFY_BOOK: {
            const { book: updatedBook } = action
            const { id: targetId } = updatedBook
            const { books } = state
            const updatedBooks = books.map(book => {
                return book.id === targetId ? updatedBook : book
            })

            return {
                ...state,
                books: updatedBooks
            }
        }

        case REMOVE_BOOK: {
            const { bookId: bookToRemove } = action
            const { books: oldBookList } = state
            const newBookList = oldBookList.filter(book => book.id !== bookToRemove)

            return {
                ...state,
                books: newBookList
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default books