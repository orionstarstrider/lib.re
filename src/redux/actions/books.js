import { url } from '../../api'

export const LOAD_BOOKS = 'LOAD_BOOKS'
export const BOOKS_LOADED = 'BOOKS_LOADED'
export const LOADING_ERROR = 'LOADING_ERROR'
export const ADD_BOOK = 'ADD_BOOK'
export const MODIFY_BOOK = 'MODIFY_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'

export const loadBooks = () => async dispatch => {
    const response = await fetch(url).catch(error => dispatch(loadingError(error.message)))

    if (response.ok) {
        const { books } = await response.json()

        dispatch(booksLoaded(books))
    } else {
        dispatch(loadingError(`Error ${response.status}`))
    }
}

export const loadingError = error => ({ type: LOADING_ERROR, error })

export const booksLoaded = books => ({ type: BOOKS_LOADED, books })

export const addBook = book => ({ type: ADD_BOOK, book })

export const modifyBook = book => ({ type: MODIFY_BOOK, book })

export const removeBook = bookId => ({ type: REMOVE_BOOK, bookId })
