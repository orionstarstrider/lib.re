import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import booksModel from '../../api'
import { loadBooks } from '../../redux/actions/books'
import THead from './THead'
import TRow from './TRow'
import './BooksTable.scss'


const getColumnsTitles  = () => {
    const { fields } = booksModel
    const fieldList = []

    for (let field of fields) {
        const { display, title, name, formatValue } = field
        if (display) fieldList.push([title, name, formatValue ?? null])
    }

    return fieldList
}

const getColumnsData = (columns, row) => {
    return columns.map(([cellTitle, cellName, formatFunction]) => [
        cellName,
        formatFunction ? formatFunction(row[cellName]) : row[cellName]
    ])
}

const editBook = id => {
    console.log('edit book', id)
}

const removeBook = id => {
    console.log('remove book', id)
}

const BooksTable = ({ booksLoading, error, books, loadBooksTable }) => {
    useEffect(() => {
        loadBooksTable()
      }, [])

    if (booksLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{ error }</div>
    }

    if (!books) {
        return <div>Books not found</div>
    }

    const columns = getColumnsTitles ()

    return (
        <div className='books_table__wrapper'>
            <table className='books_table'>
                <thead>
                    <THead cols={ columns } />
                </thead>
                <tbody>
                    { books.map(book => {
                        const { id } = book
                        return <TRow
                            cols={ getColumnsData(columns, book) }
                            editBook={ () => editBook(id) }
                            removeBook={ () => removeBook(id) }
                            bookId={ id }
                            key={ id }
                        />
                    }) }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({ books: {booksLoading, error, books} }) => ({
    booksLoading,
    error,
    books
})

const mapDispatchToProps = dispatch => ({
    loadBooksTable: () => dispatch(loadBooks())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksTable)