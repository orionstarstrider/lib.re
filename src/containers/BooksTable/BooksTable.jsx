import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import booksModel from '../../api'
import { loadBooks } from '../../redux/actions/books'
import { showModal } from '../../redux/actions/app'
import { MODE_EDIT, MODE_DELETE } from '../Modal/modes'
import THead from './THead'
import TRow from './TRow'
import s from './BooksTable.module.scss'

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

const BooksTable = ({ 
    booksLoading,
    error,
    books,
    loadBooksTable,
    handleDelete,
    handleEdit
}) => {
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
        <div className={ s.wrapper }>
            <table className={ s.booksTable }>
                <thead>
                    <THead cols={ columns } />
                </thead>
                <tbody>
                    { books.map(book => {
                        const { id: bookId } = book
                        return <TRow
                            cols={ getColumnsData(columns, book) }
                            editBook={ () => handleEdit({ bookId }) }
                            removeBook={ () => handleDelete({ bookId }) }
                            bookId={ bookId }
                            key={ bookId }
                        />
                    }) }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({ 
    books: { booksLoading, error, books } 
}) => ({
    booksLoading,
    error,
    books
})

const mapDispatchToProps = dispatch => ({
    loadBooksTable: () => dispatch(loadBooks()),
    handleDelete: data => dispatch(showModal(MODE_DELETE, data)),
    handleEdit: data => dispatch(showModal(MODE_EDIT, data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksTable)